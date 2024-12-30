import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockOrders = [
  {
    id: "1",
    date: "2024-03-20",
    status: "Completed",
    services: "Wash & Fold",
    amount: "₹240",
  },
  {
    id: "2",
    date: "2024-03-18",
    status: "In Progress",
    services: "Dry Cleaning",
    amount: "₹600",
  },
  {
    id: "3",
    date: "2024-03-15",
    status: "Completed",
    services: "Premium Laundry",
    amount: "₹450",
  },
];

export const OrderHistory = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Services</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">#{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.services}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    order.status === "Completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {order.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};