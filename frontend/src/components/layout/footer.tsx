import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

export function Footer() {
  return (
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
                  <Link to="#" className="hover:underline">
                    {item}
                  </Link>
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
  )
}