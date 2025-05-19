# Code Submission Breakdown

### Project Folder Structure

Our team's code submission able to split into **three major parts** in our demo:

1. 📦`dapp-demo`: All the DApp related and Sui interaction code
2. 📦`move-contract`: All the contracts we wrote for this demo and deployed on Sui Testnet
3. 📦`robot-sim`: All the robotic simulation setup and connection layer code

```bash
📦dapp-demo
┣ 📂public
┣ 📂src
.....┣ 📂app
..........┣ 📂api
...............┗ 📂robot
..........┣ 📂home
...............┣ 📂store
...............┗ 📂track
...............┗ 📂twins
..........┣ 📂order
.....┣ 📂components
.....┣ 📂config
.....┣ 📂constants
.....┣ 📂context
.....┣ 📂helpers
.....┣ 📂hooks
.....┣ 📂lib
.....┣ 📂services
.....┗ 📂utils

-------------------------------------

📦move-contracts
┣ 📂sources (product, robot, warehouse)

-------------------------------------
📦robot-sim
┣ 📂_pycache_
┣ 📂robot-controllers
┣ 📂connectivity-layer-server
┣ 📂robot-status-memory
┣ 📂robot-part-stl
┣ 📂webot-world-setup

```

## DApp-Demo `src` Folder Description

📂`app/api/robot`: API for controlling robot simulations (local or online embedded)

📂`app/home/store`: Store interface, list tokenized inventory items on Sui

📂`app/home/track`: Completed and ongoing orders tracking

📂`app/home/twins`: Digital twins interface, list tokenized robot digital twins and link to respective kiosk

📂`app/order`: Run Webots simulations, multi-signature mechanism, keep track Activity Verifier of each phase, perform order lifecycle on-chain, manage order state, detail on-chain log, render order page UI components

📂`components`: Some reusable frontend UI components are stored here (cards, toast, styling)

📂`config`: Database configuration

📂`context`: Manage wallet connection state through DApp

📂`constant`: Object addresses. For easy access to deployed modules and kiosks.

📂`helpers`: Helper function for order stage processing. Client and server side interface for interacting with modules.

📂`hooks`: For add,retrieve,updating orders + event listening, checking event logs, syncing order status, update data in each phase in cycle + load products, refresh stock info and update, fetch on-chain stock info, dealing with digital twins' states

📂`services`: All firebase db and Pinata (for lifecycle report) interaction

## move-contracts/

All packages and modules are deployed on Sui Testnet

**Main Sui for Robotics package**: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x0868c525a5d8a11cc8b3187a55497b9f2d8af3fe407b2ffd7179a085722b61c6/contracts)

#### 👇 View the tokenized products on Sui Scan 👇
- Green Cube: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xaa4d2d79dea534d0f1100a85486b71e8c841dd4c116105f07089ad9ad86e14d8)
- Purple Cube: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xdbd7221c41165dbadcc33a64bdc7da681f6c25f9ec123647c70a18d8a4870182)
- Blue Cube: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x12792423a02f4d3c3461b078beba80beabd24a95183661c93065bead34f75d52)

#### 👇 View the shelf kiosk of each product on Sui Scan 👇
- Green Cube Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x175256da8395caf6d4cc4e9138f1c5e4f68e01ac2b8bda0b324ddd4da20441d0)
- Purple Cube Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xdd7fe910678bb19512b64181b5730d00311c35e692361c4819e13f1c65992101)
- Blue Cube Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x7618b0ca681e265dd474f83aed995654b774d8c2a09f8d8d87d757b82ce767c3)

#### 👇 View the kiosk of each picking robot on Sui Scan 👇
- #0: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xb178d6106fbaf372caac29883e37a222ddd89b5352830eaadac274a428fe832b)
- #1: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x64a6ece22ae2171a4dc8eb078ca8531632008b69b0d1e972c55150989661d2a0)
- #2: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x87dfe5b8e5c0c9ef87d20e23b4233775c969c4208e525d0e1598287b40b16509)
- #3: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xf96c60878a3c4a6d1f55eae5d621699f991bf47168fc948e96e3eaa36372454a)
- #4: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xa03af9d95a7b26be0ae9c4a0cd250afda64a7d0ecf359441f960e8a827ff0354)

#### 👇 View the kiosk of each packing robot on Sui Scan 👇
- #0: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xe1669d9034b0ab4ab719bf356aa716e40db6e343680495c07beb160bfb58cb90)
- #1: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x3f4cb62a22abcb464cab9321e10fe09b0d3336ed0a6027949f69cde14a7e1e99)
- #2: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xbe6246d2e5eb7c9615cad1b34c24d68c356dc6934be2e006372d2b3aec047fb9)
- #3: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xd8a45e4621f87dc8bc3ae21d20faadf15159cc0da5d7fc410267c2f6a4858b81)
- #4: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x114ef82150605c64eac8d6b7a04ce8e3bbc28d8a185ee80eeb1a86f098cfdffe)

#### 👇 View the kiosk of each delivery robot on Sui Scan 👇
- #0: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xb44cd878de11eec0c93802f2bb1d7eefc731a1c6dab684288a80ab12d4c97075)
- #1: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x429c17f1f0d80acf8b708ddb56f26f3b774e79f4884cdfee50633d5c0aec4326)
- #2: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xc574ee85e9f2a980244f838d8d6c862039d67ec3509609e3f53cb45d56c592c5)
- #3: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xf0d1ba6cc8e44589d3d2696002a7a89d7f7adc22ef8be74572dfd0e446e22264)
- #4: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x7e7fe696e573cbe72c33cace10eae12efc2ea1f6d8cbd01774267a1c6fb1c583)

#### 👇 View the kiosk of each zones on Sui Scan 👇
- Order Buffer Zone Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x4fccafaf4de7bb4b434f42cc2e330e7f1dae2f62b4200959310da7cb94b64a0b)
- Packout Zone Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x82d4a447195833edeb6d9a3abb3f5bc23dcaea1cdf9bc3da06638f08aa61c266)
- Delivery Zone Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xbcd1172c54fe9307cbb225ac6b23595889475e5382375fca4a87841ddb33b5b2)

## Robot-Sim Folder Description

#### robot-controllers/

This folder contain the controller system of each individual robot which define their operations in the warehouse. Robot 1,2,3 representing picking, packing, and delivering.

#### connectivity-layer-server/

Containing the flask server acting as the connectivity layer. Using ngrok tunneling to connect.

#### robot-status-memory/

Acting as a simple robot temp memory for demo purpose.

#### robot-part-stl/

Containing all the robotic parts use for simulation purpose in the showcase.

#### webot-world-setup/

Containing the warehouse 3D scene our team setup for simulation purpose in the showcase. In the format of wbt file.