import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DashboardContent } from "@/components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
          <DashboardContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;