import { useState, useRef } from 'react'
import axios from 'axios'
import HeroSection from "../components/sections/hero-section"
import ServicesSection from '../components/sections/services-section'
import AboutSection from '../components/sections/about-section'
import CaseStudiesSection from '../components/sections/case-studies-section'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Users, Menu, X, AlertCircle, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { Link, useNavigate, useSearchParams, useParams } from 'react-router-dom'




export default function ScaleStaffLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    'case-studies': useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null)
  };

  const scrollToSection = (id: string) => {
    sectionRefs[id as keyof typeof sectionRefs]?.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 py-4 px-6 bg-[#4c2a85]">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <Users className="mr-2 h-6 w-6" />
            ScaleStaff
          </Link>
          <nav className="hidden md:flex space-x-6">
            {[
              {name: 'Home', id: 'home'},
              {name: 'Services', id: 'services'},
              {name: 'About', id: 'about'},
              {name: 'Case Studies', id: 'case-studies'}, 
              {name: 'Contact Us', id: 'contact'},
            ].map((item) => (
              <Link 
                key={item.id}
                to={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className="text-white hover:text-gray-200">
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button className="bg-white text-[#4c2a85] hover:bg-gray-100">Free Consultation</Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#4c2a85] py-2">
            {['Home', 'Services', 'About', 'Case Studies', 'Contact'].map((item) => (
              <Link key={item} to="#" className="block px-4 py-2 text-white hover:bg-[#5d3a96]">{item}</Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        <div className="scroller">
          <HeroSection ref={sectionRefs.home} />
          <ServicesSection ref={sectionRefs.services} />
          <AboutSection ref={sectionRefs.about} />
          <CaseStudiesSection ref={sectionRefs['case-studies']} />
        </div>
      </main>

      <footer className="bg-[#4c2a85] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ScaleStaff</h3>
              <p className="mb-4">Join Our Talent Community</p>
              <p className="mb-4">Use our services and grow your business with the perfect talent.</p>
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
              <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
              <p>123 Recruitment Street, Tech City, TC 12345</p>
              <p>info@scalestaff.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['About Us', 'Services', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="hover:underline">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Newsletter</h4>
              <p className="mb-4">Subscribe to our newsletter for updates, offers, and industry insights.</p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-r-none focus:ring-0 focus:border-white"
                />
                <Button className="rounded-l-none bg-white text-[#4c2a85] hover:bg-gray-100">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}