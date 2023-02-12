import Customer from './Customer'

export default interface CustomerRepository {
    create(customer: Customer): Promise<Customer>;
    update(customer: Customer): Promise<Customer>;
    delete(customer: Customer): Promise<void>;
    getAll(): Promise<Customer[]>;
}