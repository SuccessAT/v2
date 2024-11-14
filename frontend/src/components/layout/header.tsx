import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Users, Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-4 px-6 bg-[#4c2a85]">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white flex items-center">
          <Users className="mr-2 h-6 w-6" />
          ScaleStaff
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="/blog" className="text-white hover:text-gray-200">
            Blog
          </Link>
          <Link to="#" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="#" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button className="bg-white text-[#4c2a85] hover:bg-gray-100">Free Consultation</Button>
          <Button
            variant="ghost"
            size="default"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-[#4c2a85] py-2">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-[#5d3a96]">
            Home
          </Link>
          <Link to="/blog" className="block px-4 py-2 text-white hover:bg-[#5d3a96]">
            Blog
          </Link>
          <Link to="#" className="block px-4 py-2 text-white hover:bg-[#5d3a96]">
            About
          </Link>
          <Link to="#" className="block px-4 py-2 text-white hover:bg-[#5d3a96]">
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}