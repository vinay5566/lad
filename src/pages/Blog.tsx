import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Care for Delicate Fabrics",
      excerpt: "Learn the best practices for maintaining your delicate garments...",
      date: "March 15, 2024",
      imageUrl: "https://images.unsplash.com/photo-1489274495757-95c7c837b101",
    },
    {
      title: "The Benefits of Professional Dry Cleaning",
      excerpt: "Discover why professional dry cleaning is essential for your wardrobe...",
      date: "March 10, 2024",
      imageUrl: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f",
    },
    {
      title: "Eco-Friendly Laundry Tips",
      excerpt: "Simple ways to make your laundry routine more environmentally friendly...",
      date: "March 5, 2024",
      imageUrl: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Latest Updates</h1>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Stay informed with our latest articles about garment care and laundry tips.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;