module hyper_agile::blue_product {
	use std::ascii;
	use std::string::{Self, String};

	use sui::url::{Self, Url};
	use sui::kiosk;

	use asset_tokenization::tokenized_asset;

	public struct BLUE_PRODUCT has drop {}

	fun init(witness: BLUE_PRODUCT, ctx: &mut TxContext) {
		let (mut asset_cap, asset_metadata) = tokenized_asset::new_asset<BLUE_PRODUCT>(
			witness,
			1000,
			ascii::string(b"BLUE"),
			string::utf8(b"Blue Product"),
			string::utf8(b"Blue Product for Hyper Agile"),
			option::some<Url>(url::new_unsafe_from_bytes(b"https://rose-principal-turtle-588.mypinata.cloud/ipfs/QmV4Nnz8msKn8qgGy8a4Bg555ax7bt5VMXjzSXTDnYY3y1")),
			false,
			ctx
		);

		let (mut kiosk, kiosk_cap) = kiosk::new(ctx);

		let products = tokenized_asset::mint<BLUE_PRODUCT>(
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