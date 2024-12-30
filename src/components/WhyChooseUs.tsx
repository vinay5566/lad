import { Check, Clock, Users, Leaf, ThumbsUp, HeadphonesIcon } from "lucide-react";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: Check,
      title: "Quality Guaranteed",
      description: "We ensure the highest quality cleaning for your garments",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Quick turnaround times to meet your schedule",
    },
    {
      icon: Users,
      title: "Expert Staff",
      description: "Experienced professionals handling your clothes",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Environmental-friendly cleaning solutions",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "Your satisfaction is our top priority",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Care",
      description: "Dedicated support for all your needs",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            Experience the difference with our premium service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                <feature.icon className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};