import { customers } from "@/data/customers";

// Función para simular un retraso en las peticiones
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Servicio para manejar operaciones de clientes
export const customerService = {
  // Obtener todos los clientes
  async getAll() {
    await simulateDelay(500); // Simula un retraso
    return [...customers]; // Devuelve una copia para evitar mutaciones
  },

  // Obtener un cliente por ID
  async getById(id: number) {
    await simulateDelay(500);
    return customers.find((customer) => customer.id === id) || null;
  },

  // Crear un nuevo cliente
  async create(data: { name: string; email: string; phone: string }) {
    await simulateDelay(500);

    // Verifica si el cliente ya existe
    const exists = customers.some(
      (customer) =>
        customer.email.toLowerCase() === data.email.toLowerCase() ||
        customer.phone === data.phone
    );
    if (exists) {
      throw new Error("A customer with this email or phone already exists.");
    }

    // Crea un nuevo cliente con un ID único
    const newCustomer = {
      id:
        customers.length > 0 ? Math.max(...customers.map((c) => c.id)) + 1 : 1,
      ...data,
    };

    customers.push(newCustomer); // Agrega el cliente al array global
    return newCustomer;
  },

  // Actualizar un cliente
  async update(
    id: number,
    data: Partial<{ name: string; email: string; phone: string }>
  ) {
    await simulateDelay(500);
    const customer = customers.find((c) => c.id === id);
    if (!customer) throw new Error("Customer not found.");

    Object.assign(customer, data); // Actualiza solo los campos necesarios
    return customer;
  },

  // Eliminar un cliente
  async delete(id: number) {
    await simulateDelay(500);
    const index = customers.findIndex((customer) => customer.id === id);
    if (index > -1) {
      customers.splice(index, 1);
      return true;
    }
    return false;
  },
};
