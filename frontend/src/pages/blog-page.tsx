import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Users, Search, ChevronRight, Menu } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// Define the BlogPost interface
interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string; // Ensure this matches the format returned by your API
  category: string;
  image: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/posts/');
        setBlogPosts(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 px-6 bg-[#4c2a85]">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white flex items-center">
            <Users className="mr-2 h-6 w-6" />
            ScaleStaff
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-white hover:text-gray-200">Home</a>
            <a href="/blog" className="text-white hover:text-gray-200">Blog</a>
            <a href="#" className="text-white hover:text-gray-200">About</a>
            <a href="#" className="text-white hover:text-gray-200">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-white text-[#4c2a85] hover:bg-gray-100">Subscribe</Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <section className="py-12 bg-[#4c2a85] text-white">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold mb-4">ScaleStaff Blog</h1>
            <p className="text-xl mb-8">Stay updated with the latest trends and insights in recruitment and talent management.</p>
            <div className="flex max-w-md">
              <Input 
                type="text" 
                placeholder="Search articles..." 
                className="rounded-r-none focus:ring-0 focus:border-white"
              />
              <Button className="rounded-l-none bg-white text-[#4c2a85] hover:bg-gray-100">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-gray-600 mb-2">{post.category}</div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        By {post.author} | {post.date}
                      </div>
                      <a href="#" className="text-[#4c2a85] hover:underline flex items-center">
                        Read More <ChevronRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8">Get the latest articles and insights delivered straight to your inbox.</p>
            <form className="flex flex-col md:flex-row justify-center items-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-64 mb-4 md:mb-0 md:mr-4"
              />
              <Button className="w-full md:w-auto bg-[#4c2a85] hover:bg-[#3c1f68]">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#4c2a85] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ScaleStaff</h3>
              <p className="mb-4">Empowering businesses with top talent and recruitment solutions.</p>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="hover:text-gray-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Blog Categories</h4>
              <ul className="space-y-2">
                {['Technology', 'Management', 'Data Science', 'Recruitment'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Recruitment Street, Tech City, TC 12345</p>
              <p>info@scalestaff.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} ScaleStaff. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
