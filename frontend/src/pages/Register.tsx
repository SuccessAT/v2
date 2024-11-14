import { useState } from 'react';
import axios from 'axios';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Users, Search, ChevronRight, Menu } from "lucide-react"
import { useRouter } from 'next/navigation'


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/auth/register/', { username, password, email });
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

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
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Register</button>
                </form>
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
    );
};

export default Register;

