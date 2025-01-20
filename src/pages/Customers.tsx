import { useState, useEffect } from "react";
import CustomersTable from "@/components/tables/CustomersTable";
import { customerService } from "@/services/customerService";
import CustomerForm from "@/components/forms/CustomerForm";
import { useToast } from "@/hooks/use-toast";

interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export default function Customers() {
  const { toast } = useToast();
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await customerService.getAll();
        setCustomers(data);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch customers.",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [toast]);

  const handleAddCustomer = async (customer: Omit<Customer, "id">) => {
    try {
      const newCustomer = await customerService.create(customer);
      setCustomers((prev) => [...prev, newCustomer]);
      toast({
        title: "Éxito",
        description: "El cliente ha sido añadido con éxito",
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({ title: "Error", description: error.message });
      }
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <CustomerForm onSubmit={handleAddCustomer} />
      {loading ? <p>Loading...</p> : <CustomersTable data={customers} />}
    </div>
  );
}
