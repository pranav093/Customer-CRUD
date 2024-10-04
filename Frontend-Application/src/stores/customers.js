import { writable } from 'svelte/store';

const customersStore = writable([]);

export const customers = {
    getAll: async () => {
        // Fetch all customers (use API or dummy data for now)
        customersStore.set([
            { id: 1, name: "John Doe", email: "john@example.com" },
            { id: 2, name: "Jane Doe", email: "jane@example.com" }
        ]);
        return customersStore;
    },
    get: async (id) => {
        // Fetch customer by ID (use dummy data)
        return { id, name: "John Doe", email: "john@example.com" };
    },
    create: async (customer) => {
        // Create a new customer
        // Push to store (or call API)
        customersStore.update(c => [...c, { id: Date.now(), ...customer }]);
    },
    update: async (id, updatedCustomer) => {
        // Update customer by ID
        customersStore.update(c => c.map(customer => customer.id === id ? updatedCustomer : customer));
    },
    remove: async (id) => {
        // Remove customer by ID
        customersStore.update(c => c.filter(customer => customer.id !== id));
    },
};
