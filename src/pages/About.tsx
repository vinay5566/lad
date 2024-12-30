import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to FreshPress, your trusted partner in premium laundry and dry cleaning services since 1995. We take pride in delivering exceptional garment care with attention to detail and commitment to quality.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experienced professionals uses state-of-the-art equipment and eco-friendly cleaning solutions to ensure your garments receive the best possible care while minimizing our environmental impact.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-600">
                  To provide exceptional laundry and dry cleaning services that exceed customer expectations while maintaining the highest standards of quality and environmental responsibility.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  To be the leading provider of premium garment care services, recognized for our quality, reliability, and commitment to customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;