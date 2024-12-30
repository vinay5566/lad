import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-4 md:mb-6 animate-fade-down">
            Professional Laundry & Dry Cleaning Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            Expert care for your garments with free pickup and delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              Schedule Pickup
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 md:mt-16 px-4">
            {[
              { icon: Clock, text: "24-Hour Turnaround" },
              { icon: MapPin, text: "Free Pickup & Delivery" },
              { icon: Calendar, text: "Easy Online Scheduling" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-gray-700 bg-white p-3 md:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
                style={{ animationDelay: `${(index + 3) * 200}ms` }}
              >
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary animate-bounce-in" style={{ animationDelay: `${(index + 4) * 200}ms` }} />
                <span className="text-sm md:text-base">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};