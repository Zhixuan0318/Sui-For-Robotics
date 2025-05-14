#[allow(lint(public_random))]
module hyper_agile::robots {
	use std::string::{String};

	use sui::event::emit;
	use sui::random::{Random, new_generator, generate_u64_in_range};
	use sui::table::{Table};

	use hyper_agile::warehouse::{Self, Storage, RobotType};

	const ENoAvailableRobots: u64 = 0;

	// Events

	public struct SelectedRobot has copy, drop {
		robot_type: RobotType,
		robot_id: u8,
		order_id: String
	}

	public fun pick_order(
		random: &Random, 
		storage: &mut Storage,
		order_id: String,
		ctx: &mut TxContext
	) {
		let picking_robot_type = warehouse::robot_type(0);

		let new_robot_id = select_robot(random, warehouse::get_robots_mut(storage, picking_robot_type), ctx);
		warehouse::set_last_robot_id(storage, order_id, new_robot_id);

		emit(SelectedRobot {
			robot_type: picking_robot_type,
			robot_id: new_robot_id,
			order_id
		});
	}

	public fun pack_order(
		random: &Random, 
		storage: &mut Storage,
		order_id: String,
		ctx: &mut TxContext
	) {
		let old_robot_id = warehouse::get_last_robot_id(storage, order_id);
		warehouse::set_robot_availability(storage, warehouse::robot_type(0), old_robot_id, true);

		let packing_robot_type = warehouse::robot_type(1);

		let new_robot_id = select_robot(random, warehouse::get_robots_mut(storage, packing_robot_type), ctx);
		warehouse::set_last_robot_id(storage, order_id, new_robot_id);

		emit(SelectedRobot {
			robot_type: packing_robot_type,
			robot_id: new_robot_id,
			order_id
		});
	}

	public fun deliver_order(
		random: &Random, 
		storage: &mut Storage,
		order_id: String,
		ctx: &mut TxContext
	) {
		let old_robot_id = warehouse::get_last_robot_id(storage, order_id);
		warehouse::set_robot_availability(storage, warehouse::robot_type(1), old_robot_id, true);

		let delivering_robot_type = warehouse::robot_type(2);

		let new_robot_id = select_robot(random, warehouse::get_robots_mut(storage, delivering_robot_type), ctx);
		warehouse::set_last_robot_id(storage, order_id, new_robot_id);

		emit(SelectedRobot {
			robot_type: delivering_robot_type,
			robot_id: new_robot_id,
			order_id
		});
	}

	fun select_robot(
		random: &Random, 
		availability: &mut Table<u8, bool>, 
		ctx: &mut TxContext
	): u8 {
		let mut available_robots = vector::empty<u8>();

		let mut i = 0;
		while(i < 5) {
			if(*availability.borrow(i)) {
				available_robots.push_back(i);
			};
			i = i + 1;
		};

		assert!(!available_robots.is_empty(), ENoAvailableRobots);

		let array_index = generate_robot_id(available_robots.length() - 1, random, ctx);
		let robot_id = *available_robots.borrow(array_index);

		*availability.borrow_mut(robot_id) = false;

		robot_id
	}
	
	fun generate_robot_id(
		max: u64,
		random: &Random, 
		ctx: &mut TxContext
	): u64 {
		let mut random_generator = new_generator(random, ctx);
		generate_u64_in_range(&mut random_generator, 0, max)
	}
}