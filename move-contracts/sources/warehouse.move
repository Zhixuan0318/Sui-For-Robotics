module hyper_agile::warehouse {
	use std::string::{String};

	use sui::event::{emit};
	use sui::table::{Self, Table};
	use sui::kiosk::{Kiosk, KioskOwnerCap};

	use asset_tokenization::tokenized_asset::{TokenizedAsset};

	const EOrderAlreadyExist: u64 = 0;

	public enum RobotType has store, copy, drop {
		Picking, Packing, Delivery
	}

	public struct Order has store, copy, drop {
		product_id: u8,
		receiver: address,
		last_robot_id: u8
	}

	public struct Storage has key, store {
		id: UID,
		orders_register: Table<String, Order>,
		robots_availability: Table<RobotType, Table<u8, bool>>,
	}

	// Events

	public struct OrderReceived has copy, drop {
		from: address,
		order_id: String,
		product_id: u8
	}

	public struct MoveProduct has copy, drop {
		from: address,
		to: address,
		product: ID,
		order_id: String,
	}

	fun init(ctx: &mut TxContext) {		
		let mut robots = table::new<RobotType, Table<u8, bool>>(ctx);

		let mut picking = table::new<u8, bool>(ctx);
		let mut packing = table::new<u8, bool>(ctx);
		let mut delivering = table::new<u8, bool>(ctx);

		let mut i = 0;
		while(i < 5) {
			picking.add(i, true);
			packing.add(i, true);
			delivering.add(i, true);

			i = i + 1;
		};

		robots.add(RobotType::Picking, picking);
		robots.add(RobotType::Packing, packing);
		robots.add(RobotType::Delivery, delivering);

		transfer::share_object(Storage {
			id: object::new(ctx),
			orders_register: table::new<String, Order>(ctx),
			robots_availability: robots
		});
	}

	public entry fun place_order(
		storage: &mut Storage,
		order_id: String,
		product_id: u8, 
		ctx: &mut TxContext
	) {
		assert!(!storage.orders_register.contains(order_id), EOrderAlreadyExist);

		storage.orders_register.add(order_id, Order {
			product_id,
			receiver: ctx.sender(),
			last_robot_id: 0
		});

		emit(OrderReceived {
			from: ctx.sender(),
			order_id,
			product_id
		});
	}

	public entry fun move_product<T>(
		kiosk_from: &mut Kiosk,
		kiosk_cap_from: &KioskOwnerCap,
		kiosk_to: &mut Kiosk,
		kiosk_cap_to: &KioskOwnerCap,
		order_id: String,
		product: ID,
		ctx: &mut TxContext
	) {
		let mut taken_product: TokenizedAsset<T> = kiosk_from.take(kiosk_cap_from, product);

		if(taken_product.value() > 1) {
			let splitted = taken_product.split(1, ctx);
			kiosk_from.place(kiosk_cap_from, taken_product);
			kiosk_to.place(kiosk_cap_to, splitted);
		} else {
			kiosk_to.place(kiosk_cap_to, taken_product);
		};

		emit(MoveProduct {
			from: object::id_address(kiosk_from),
			to: object::id_address(kiosk_to),
			product,
			order_id
		});
	}

	public fun ship_order<T>(
		kiosk: &mut Kiosk,
		kiosk_cap: &KioskOwnerCap,
		storage: &mut Storage,
		order_id: String,
		product: ID
	) {
		let taken_product: TokenizedAsset<T> = kiosk.take(kiosk_cap, product);
		let order = *storage.orders_register.borrow(order_id);

		set_robot_availability(storage, RobotType::Delivery, order.last_robot_id, true);

		transfer::public_transfer(taken_product, order.receiver);

		emit(MoveProduct {
			from: object::id_address(kiosk),
			to: order.receiver,
			product,
			order_id
		});
	}

	public(package) fun set_robot_availability(
		storage: &mut Storage,
		robot_type: RobotType,
		robot_id: u8,
		new_availability: bool
	) {
		*storage.robots_availability.borrow_mut(robot_type).borrow_mut(robot_id) = new_availability;
	}

	public(package) fun get_robots_mut(
		storage: &mut Storage,
		robot_type: RobotType
	): &mut Table<u8, bool> {
		storage.robots_availability.borrow_mut(robot_type)
	}

	public(package) fun robot_type(
		id: u8
	): RobotType {
		if(id == 0) {
			RobotType::Picking
		} else
		if (id == 1) {
			RobotType::Packing
		} else {
			RobotType::Delivery
		}
	}

	public(package) fun get_last_robot_id(
		storage: &mut Storage,
		order_id: String
	): u8 {
		*&storage.orders_register.borrow_mut(order_id).last_robot_id
	}

	public(package) fun set_last_robot_id(
		storage: &mut Storage,
		order_id: String,
		robot_id: u8
	 ) {
		let order = storage.orders_register.borrow_mut(order_id);
		*&mut order.last_robot_id = robot_id;
	}
}