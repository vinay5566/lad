import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            We're here to help with any questions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Phone,
              title: "Phone",
              content: "(555) 123-4567",
              link: "tel:+15551234567",
            },
            {
              icon: Mail,
              title: "Email",
              content: "info@laundryservice.com",
              link: "mailto:info@laundryservice.com",
            },
            {
              icon: MapPin,
              title: "Address",
              content: "123 Clean Street, Fresh City, FC 12345",
              link: "https://maps.google.com",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex flex-col items-center p-6 border rounded-xl hover:shadow-lg transition-shadow"
            >
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};