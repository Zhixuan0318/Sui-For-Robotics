module hyper_agile::green_product {
	use std::ascii;
	use std::string::{Self, String};

	use sui::url::{Self, Url};
	use sui::kiosk;

	use asset_tokenization::tokenized_asset;

	public struct GREEN_PRODUCT has drop {}

	fun init(witness: GREEN_PRODUCT, ctx: &mut TxContext) {
		let (mut asset_cap, asset_metadata) = tokenized_asset::new_asset<GREEN_PRODUCT>(
			witness,
			1000,
			ascii::string(b"GREEN"),
			string::utf8(b"Green Product"),
			string::utf8(b"Green Product for Hyper Agile"),
			option::some<Url>(url::new_unsafe_from_bytes(b"https://rose-principal-turtle-588.mypinata.cloud/ipfs/QmeMcLQ2KFJMo7JC3SQBvpEK4vqwHU4rcJGVYckKbyziDz")),
			false,
			ctx
		);

		let (mut kiosk, kiosk_cap) = kiosk::new(ctx);

		let products = tokenized_asset::mint<GREEN_PRODUCT>(
			&mut asset_cap,
			vector::empty<String>(),
			vector::empty<String>(),
			1000,
			ctx
		);

		kiosk.place(&kiosk_cap, products);

		transfer::public_share_object(kiosk);
		transfer::public_share_object(asset_metadata);
		transfer::public_transfer(asset_cap, ctx.sender());
		transfer::public_transfer(kiosk_cap, ctx.sender());
	}
}