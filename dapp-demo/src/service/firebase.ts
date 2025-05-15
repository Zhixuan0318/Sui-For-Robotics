import { initializeApp } from 'firebase/app';
import {
    collection,
    doc,
    Firestore,
    getDoc,
    getDocs,
    getFirestore,
    setDoc,
    updateDoc,
} from 'firebase/firestore';

import config from '@/config/firebase.json';

export default class Database {
    isAuth = false;
    db: Firestore;

    constructor() {
        const app = initializeApp(config);
        this.db = getFirestore(app);
    }

    async authenticate() {
        if (this.isAuth) return;
        // todo auth
        this.isAuth = true;
    }

    async fetchRobots(): Promise<TwinsRobot[]> {
        const picking = await getDocs(collection(this.db, 'sui', 'robot', 'picking'));
        const packing = await getDocs(collection(this.db, 'sui', 'robot', 'packing'));
        const delivery = await getDocs(collection(this.db, 'sui', 'robot', 'delivery'));

        let robots: TwinsRobot[] = [];
        picking.docs.map((robot: any) => robots.push({ ...robot.data(), type: 'Picking' }));
        packing.docs.map((robot: any) => robots.push({ ...robot.data(), type: 'Packing' }));
        delivery.docs.map((robot: any) => robots.push({ ...robot.data(), type: 'Delivery' }));

        return robots;
    }

    async updateRobotStatus(id: number, type: RobotType, isActive: boolean) {
        await this.authenticate();
        await updateDoc(doc(this.db, 'sui', 'robot', type.toLowerCase(), id.toString()), {
            id,
            isActive,
        });
    }

    async fetchOrders(wallet: string): Promise<Order[]> {
        const snapshot = await getDocs(collection(this.db, 'sui', 'users', wallet));
        if (snapshot.empty) return [];
        return snapshot.docs.map((order) => order.data()) as Order[];
    }

    async addOrUpdateOrder(wallet: string, order: Order) {
        await this.authenticate();
        const ref = doc(this.db, 'sui', 'users', wallet, order.id);

        const snapshot = await getDoc(ref);
        if (snapshot.exists()) await updateDoc(ref, { ...order });
        else await setDoc(ref, { ...order });
    }
}
