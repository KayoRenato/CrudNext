import firebase from "../../firebase/config";
import Customer from "../../core/Customer";
import CustomerRepository from "../../core/CustomerRepository";

export default class CustomerCollection implements CustomerRepository {

    #converter = {
        toFirestore(customer: Customer) {
            return {
                name: customer.name,
                age: customer.age,
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions): Customer {
            const data = snapshot.data(options);
            return new Customer(data.name, data.age, snapshot.id);
        }
    }


    async create(customer: Customer): Promise<Customer> {
        const docRef = await this.collection().add(customer)
        const doc = await docRef.get();
        return doc.data() as Customer;
    }

    async update(customer: Customer): Promise<Customer> {
        await this.collection().doc(customer.id).set(customer);
        return customer
    }

    async delete(customer: Customer): Promise<void> {
        return this.collection().doc(customer.id).delete();
    }

    async getAll(): Promise<Customer[]> {
        const query = await this.collection().get();
        return query.docs.map(doc => doc.data() as Customer) ?? [];
    }


    private collection() {
        return firebase.firestore().collection("customers").withConverter(this.#converter);
    }

}