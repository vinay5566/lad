import { MessageSquare } from "lucide-react";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      content: "Best laundry service in town! They take special care of my silk sarees and traditional wear.",
      image: "/placeholder.svg",
    },
    {
      name: "Rajesh Kumar",
      role: "Business Professional",
      content: "Excellent service for my formal suits and traditional kurtas. Their steam press is perfect!",
      image: "/placeholder.svg",
    },
    {
      name: "Anita Patel",
      role: "Fashion Designer",
      content: "They handle delicate embroidered garments with expertise. Perfect for designer ethnic wear.",
      image: "/placeholder.svg",
    },
    {
      name: "Deepak Verma",
      role: "IT Professional",
      content: "Their app makes scheduling pickups so convenient. Great for busy professionals like me!",
      image: "/placeholder.svg",
    },
    {
      name: "Meera Reddy",
      role: "Homemaker",
      content: "The way they handle my family's traditional wear is impressive. Best service for Indian clothes!",
      image: "/placeholder.svg",
    },
    {
      name: "Arjun Singh",
      role: "Wedding Planner",
      content: "Their expertise with wedding attire is unmatched. They handle heavy lehengas and sherwanis perfectly.",
      image: "/placeholder.svg",
    },
    {
      name: "Kavita Iyer",
      role: "Boutique Owner",
      content: "My customers trust their service for designer wear. They maintain the intricate work beautifully.",
      image: "/placeholder.svg",
    },
    {
      name: "Ravi Malhotra",
      role: "Corporate Executive",
      content: "Prompt service and excellent care for business formals. Their steam press is exceptional!",
      image: "/placeholder.svg",
    },
    {
      name: "Sanya Gupta",
      role: "Dance Instructor",
      content: "They handle my dance costumes with such care. The sequins and embellishments remain intact!",
      image: "/placeholder.svg",
    },
    {
      name: "Arun Kapoor",
      role: "Restaurant Owner",
      content: "Great service for table linens and uniforms. They understand professional standards.",
      image: "/placeholder.svg",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    duration: 20, // Smooth transition duration
  });

  useEffect(() => {
    if (emblaApi) {
      const intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [emblaApi]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">Experience speaks louder than words</p>
        </div>
        <div className="max-w-7xl mx-auto">
          <Carousel
            ref={emblaRef}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-up h-full"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 transition-transform duration-300 hover:scale-110"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="relative">
                      <MessageSquare className="w-8 h-8 text-gray-200 absolute -top-4 -left-2 transition-transform duration-300 hover:scale-110" />
                      <p className="text-gray-600 italic relative z-10 pl-4">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex animate-fade-in" />
            <CarouselNext className="hidden md:flex animate-fade-in" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};