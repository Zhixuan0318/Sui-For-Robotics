<div align="center">
    <img src="https://github.com/user-attachments/assets/c220b639-4a4d-4466-9ee0-30936b242ff0" width=100>
    <h1>Sui for Robotics</h1>
    <strong>Connecting Industrial Warehouse Robotic Automation to Sui</strong>  
</div>
<br>

![Frame 7 (15)](https://github.com/user-attachments/assets/1a07ba72-a055-4974-a60a-54ace8f1ca4b)

## 📦 Our Deliverables

1. Our 5 mins Demo Video (Youtube) [🌐Watch It!](https://www.youtube.com/watch?v=xWCTDA4fxlk)
2. Our Pitch Deck (PDF Download) [🌐Read It!](https://drive.google.com/file/d/1dL_ALNKzEV2jqKFUczPkRSH8rSlPvoT7/view?usp=sharing)
3. Our Demo DApp (Deployed on Sui Testnet) [🌐Try It!](https://sui-for-robotics.vercel.app/)

### Extra: Code Submission Breakdown 📃
For the convenience of the technical judges, our team has organized the code submission by breaking down the structure and providing descriptions for each folder and important files. You can access the documentation folder [🌐here](https://github.com/Zhixuan0318/Sui-For-Robotics/tree/main/doc#code-submission-breakdown) !

<br>

## 👊 Problem We're Tackling

![image](https://github.com/user-attachments/assets/bb1e1d14-c1bc-46c0-95cc-9d94d03f80f5)

Industrial warehouses are facing several challenges in 2025, including increased pressure to scale, rising labor costs, and workload spikes that exceed what humans alone can manage. As a result, many industrial warehouses are beginning to adopt robotic automation to enhance workflow speed and efficiency.

One of the key issues in robotic-powered industrial warehouses is data centralization, especially when operating within a Web2-based infrastructure. This challenge is further compounded by the industry's frequent adoption of distributed manufacturing strategies, which create complex supply chains involving multiple stakeholders and manufacturing units spread across various locations.

In a Web2-based robotic infrastructure, these parties often operate in silos due to disjointed and fragmented data systems, leading to information asymmetry. In other words, a robot system in one warehouse may collect data that is not shared with robots in another warehouse, making it difficult to achieve a unified operational view. The problems that arise from this include:

#### ❌ Data is not Transparent: 

Factories and warehouses operating their robotic fleets in an isolated data systems or across various locations, will create a "visibility gap" that limits transparency and access to real-time operational data for stakeholders.
   
#### ❌ Low Efficiency + Track and Trace Challenge: 

Workflow efficiency suffers due to the complex data integration processes that slow decision-making and create operational bottlenecks. This lack of transparency also complicates essential tasks like tracking the history of production or the handling of a product, even among connected facilities. The underlying reason is the lack of clear auditing trials which can be easily access, and this is a classic problem in supply chain sector.
   
#### ❌ Security Concerns: 

Security concerns are heightened in Web2 environments, where mutable data is vulnerable to tampering and counterfeiting, which is considered a damage to the supply chain and distribution trust. Additionally, the risk of a single point of failure can lead to significant disruptions, cascading through the entire robotic automation operation.

## 💡 Inspirations: Really Motivated Us!

To address the problems, letting current industries robotic setup to transition and utilise a Sui-connected distributed data system is a smart move. The intuition behind is simple: Every action taken by a robot in a factory is recorded on the blockchain, making product movement, quality checks, and production steps fully transparent, traceable, verifiable, and tamper-resistant, significantly enhancing security and auditability for all supply chain stakeholders. Our team had included this in our demo video, don't miss it!

## ⚔️ Existing Solutions and Challenges

Existing solutions for implementing robotic automation in industries include a variety of software platforms (such as Gazebo and Webots), industry-specific solutions (like those from ABB, KUKA, and Fanuc), and integration tools (including ROS, AWS IoT, and Microsoft Azure IoT Hub). However, challenges emerge when considering the implementation of Web3 solutions in robotic automated operations. A significant hurdle is that the Sui ecosystem lacks robotics-related development tools to facilitate the integration of blockchain solutions with existing legacy systems, which are often incompatible.

>  A simple example: while developing a prototype for our demo, we found that no industry-grade robotic simulators offer tools for easily interacting with Sui events to conduct simulations.

☹️☹️☹️ Although industries can create their own tools or middleware for Sui integrations, this approach can be costly, time-consuming, and resource-intensive. We need a solution to bridge the gap between industry robotic automation (web2 layer) and the Sui ecosystem (web3 layer).

Here is a concept illustration:

![image](https://github.com/user-attachments/assets/c7f5badf-58d5-472b-820f-da50ee1544f7)

## 💪 We launch Sui For Robotics (Our Solution)

Hence, our team decided to launch Sui For Robotics as the first B2B Middleware-as-a-Service (MaaS) provider, assisting industries across various sectors with industrial warehouse robotic automation by designing and developing a custom hub. This hub acts like a bridge, which connects all components in their robotic automation setup architecture to the Sui ecosystem. The benefit of using a custom middleware hub is that all of the important layers in the Web2-based robotic automation systems such as the factory floor (physical hardwares and robotics), IoT connectivity layer, security layer and also control and management layer, able to interact with the blockchain layer component easily (which involve on-chain tokenized assets, accounts, modules and packages, or any on-chain tooling integration). Our hub will now become the common interface for industries to connect all robotic components built by different language, framework, hardware, and communication protocol into a unified Web3 system on Sui. Below is a high-level architecture overview of a custom hub in a industry robotic setup:

### Introduce the concept of Hub - Architecture Overview

![image](https://github.com/user-attachments/assets/165d4da4-97fc-4333-81a5-a28bfbbded92)

### Why custom, not a “one-size-fits-all” solution❓

Our role is crucial because industrial robotic architectures are often complex and highly customized. Each industry has unique operational needs, diverse technologies, and specific regulatory requirements, making a one-size-fits-all approach impractical. That's why we offer tailored solutions, enabling industries to integrate Sui Web3 infrastructure efficiently, which aligns perfectly with our product-market fit. This approach not only saves significant time for indsutries but also reduces costs.

![image](https://github.com/user-attachments/assets/c2382f98-6b65-494b-bf4b-0b0c18453d41)

As a B2B (business-to-business) service provider, we are proud to be the first to offer this service on Sui. In one of our future milestone (have a look in our pitch deck), we will also serve as a key driver in introducing a comprehensive ecosystem of industry-specific robotic development tools to the Sui community as part of our ongoing service journey.

## How we helps our industry clients? (Not Limited To)

- **🏭 Manufacturing:** On-chain logs of robotic interactions, verifiable compliance and audit trails for industrial goods.

- **🚚 3PL (Third Party Logistics) and Ecommerce:** Real time on-chain updates of your parcel handled by order fulfilment robots in the warehouse.

- **🧬 Pharmaceutical and Biotech:** Products handling with robots able to follow drug transparency regulations easily with verifiable trace.

- **🍄 Cold Storage:** Verifiable robot handling of food and biotech products. Enhanced product lifecycle traceability.

## ✨ Proof of Concept: An Implementation Prototype

The implementation prototype we showcase in the demo video is built using the hub architecture concept that we proposed, which able to operate a robotic-powered small scale ecommerce-warehouse supply chain cycle. Further proving the feasibility of utilising Sui solutions to solve real world industry problem in our project. Below attached is a high-level architecture diagram of our ecommerce-warehouse demo setup, which our custom hub being the most crucial middleware component:

![image](https://github.com/user-attachments/assets/dff69594-5590-47b9-b68c-4ed0ca981ca5)

An order is placed at the client layer, and the products are held in the warehouse as tokenized assets. Inventory items are tokenized on Sui as on-chain digital assets using the `asset_tokenization` package, enabling fully on-chain tracking and management with a more transparent approach. Each tokenized inventory item is transferred to and stored in its respective kiosk, which is mapped to a real-life shelf or storage location in the warehouse.

#### 👇 View the tokenized products on Sui Scan 👇
- Green Cube: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xaa4d2d79dea534d0f1100a85486b71e8c841dd4c116105f07089ad9ad86e14d8)
- Purple Cube: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xdbd7221c41165dbadcc33a64bdc7da681f6c25f9ec123647c70a18d8a4870182)
- Blue Cube: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x12792423a02f4d3c3461b078beba80beabd24a95183661c93065bead34f75d52)

#### 👇 View the shelf kiosk of each product on Sui Scan 👇
- Green Cube Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x175256da8395caf6d4cc4e9138f1c5e4f68e01ac2b8bda0b324ddd4da20441d0)
- Purple Cube Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xdd7fe910678bb19512b64181b5730d00311c35e692361c4819e13f1c65992101)
- Blue Cube Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x7618b0ca681e265dd474f83aed995654b774d8c2a09f8d8d87d757b82ce767c3)

![image](https://github.com/user-attachments/assets/53490d2f-ada2-4d31-a03a-fc5f3ccbfa9a)

The order is processed and coordinated by on-chain modules and fulfilled by tokenized robots assigned to different tasks. These robots are digital twin representations of real robots in the factory and are also tokenized using the `asset_tokenization` package on Sui. Representing industrial robots as digital twins on Sui provides a transparent and efficient way to manage them on-chain. Each tokenized robot digital twin is mapped to a uniquely created kiosk to handle the on-chain asset flow during the order fulfillment process.

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

![image](https://github.com/user-attachments/assets/34afb81f-4a83-4072-b9d6-06b92d33caaa)

We designed a factory simulation to visualize this. The cool part is, native Sui randomness is used to select one available robot from the fleet for each operation; this process is known as load balancing. 

![image](https://github.com/user-attachments/assets/1680df40-95d6-4585-92bd-61b3561b79c6)

For a human-robot collaborative environment (for example, a Good to Person scenario in warehouse), which requires human operators’ close supervision, this can be facilitated using a multi-signature mechanism on Sui, creating an efficient feedback loop that reflects on the tokenized robot.

![image](https://github.com/user-attachments/assets/37b76afd-69f8-4971-af4a-e61bfd0c94ab)

Finally, when the order is fulfilled, an operation report will be generated and stored on Pinata. Fully tamper-proof and verifiable.

![image](https://github.com/user-attachments/assets/58d47264-e871-418d-a603-28463e05977c)

## 🧩 Composable kiosk-based design approach for warehouse robotic automation

We use kiosks for our inventory and robots, with each digital twin mapped to a unique kiosk. This is our composable, kiosk-based design approach for warehouse automation. Every inventory shelf is treated as a kiosk, and inventory tokens are transferred in. Each zone within the warehouse is also represented as a kiosk, and each robot operating on the floor is assigned a kiosk. During a single operation cycle, an inventory token flows deterministically from one kiosk to another. This architecture provides us with better control and makes the system modular.

![image](https://github.com/user-attachments/assets/14de62a0-4607-444b-825e-652b44456851)

Below is an example of a kiosk-to-kiosk asset movement, involving the product move out from the shelf to a chosen picking robot:

![image](https://github.com/user-attachments/assets/124fd6f0-542e-4aac-a343-b3f0a704c547)

#### 👇 View the kiosk of each zones on Sui Scan 👇
- Order Buffer Zone Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x4fccafaf4de7bb4b434f42cc2e330e7f1dae2f62b4200959310da7cb94b64a0b)
- Packout Zone Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0x82d4a447195833edeb6d9a3abb3f5bc23dcaea1cdf9bc3da06638f08aa61c266)
- Delivery Zone Kiosk: [🌐Sui Scan](https://suiscan.xyz/testnet/object/0xbcd1172c54fe9307cbb225ac6b23595889475e5382375fca4a87841ddb33b5b2)

## 🔌Connecting local robotic fleet

![image](https://github.com/user-attachments/assets/a85754ea-7a23-4312-98f2-c93d14e805b2)

To further validate the feasibility of our implementation, we also perform testing on a physical robot, which we refer to as a local robotic fleet. The system is centered around the Hub as well, enabling industries to interact with an IoT connectivity layer (refer to above architecture overview). This layer acts as an intermediary between the robotic fleet and the Hub, which is integrated with Sui. The IoT connectivity layer can incorporate various technologies such as AWS IoT Core, Microsoft Azure IoT, Oracle IoT cloud, and MQTT-based solutions like RabbitMQ or Kafka, etc. 

To simplify the demonstration, our team utilized ngrok to establish a secure communication tunnel between our physical robot—a combination of a ROS-powered CoBot and a mobile AGV (Automated Guided Vehicle), with operations built using the Elephant Robotics Python API—and initiated the order fulfillment process on our DApp. As shown in the demo video, the commands assigned from Sui are successfully captured and transmitted to the connectivity layer, where they are received and executed by the robot in real time. Once the task is completed, the operation is logged and sent back via the same route. This process mirrors what can be tested directly on our demo DApp.

We also replicated this functionality using our Webots simulation (hosted locally in Webots software) to control the robotic fleet. By creating an intermediate connectivity layer (via a Flask server) and utilizing the ngrok tunnel, we successfully recreated the same results as with the physical robot. You can see the full demonstration in the video!
