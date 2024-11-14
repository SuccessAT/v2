import { useState, forwardRef } from 'react'
import axios from 'axios'
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from '../ui/label'
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { ChevronLeft, ChevronRight, Menu, X, AlertCircle } from "lucide-react"
import { LazyLoadImage } from 'react-lazy-load-image-component'; // Using lazy loading for images
import { Link, useNavigate, useSearchParams, useParams } from 'react-router-dom'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'


const HeroSection = forwardRef<HTMLElement>((props, ref) => {

  const [currentImage, setCurrentImage] = useState(0)
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const images = [
    "/assets/images/hero-slide-1.jpg",
    "/assets/images/hero-slide-2.jpg",
    "/assets/images/hero-slide-3.jpg",
    "/assets/images/hero-slide-4.jpg"
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleAuthSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const form = event.currentTarget
    const isLogin = form.getAttribute('data-form-type') === 'login'
    const endpoint = isLogin ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register'

    try {
      const response = await axios.post(endpoint, {
        username: form.username.value,
        password: form.password.value,
        ...(isLogin ? {} : { email: form.email.value }),
      })

      if (response.data.success) {
        if (isLogin) {
          navigate('/create-blog-post')
        } else {
          setError('Registration successful. Please log in.')
        }
      } else {
        setError(response.data.message || 'An error occurred. Please try again.')
      }
    } catch (error) {
      setError('Invalid Username or Password.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      ref={ref} 
      id="home"
      className="py-12 md:py-20 bg-[#4c2a85] bg-opacity-100 text-white"
      style={{
        backgroundImage: "url('/assets/images/hero-bg-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}>
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start py-12">
        <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 py-24">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Crafting Recruitment Solutions with Expertise.
          </h1>
          <p className="text-xl mb-6">
            We're a recruitment solutions company dedicated to revolutionizing how businesses find and manage top talent in the tech space.
          </p>
          <div className="flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  className="text-[#4c2a85] border-white bg-gray-300 hover:bg-white hover:text-[#4c2a85] transition-colors duration-300">
                  Explore Now
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Welcome to ScaleStaff</DialogTitle>
                  <DialogDescription>
                    Login or create an account to get started
                  </DialogDescription>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="register">Register</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <form onSubmit={handleAuthSubmit} data-form-type="login">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="username-login">Username</Label>
                          <Input id="username-login" name="username" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-login">Password</Label>
                          <Input id="password-login" name="password" type="password" required />
                        </div>
                      </div>
                      <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                      </Button>
                    </form>
                  </TabsContent>
                  <TabsContent value="register">
                    <form onSubmit={handleAuthSubmit} data-form-type="register">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="username-register">Username</Label>
                          <Input id="username-register" name="username" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email-register">Email</Label>
                          <Input id="email-register" name="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password-register">Password</Label>
                          <Input id="password-register" name="password" type="password" required />
                         </div>
                      </div>
                      <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                        {isLoading ? 'Registering...' : 'Register'}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
                  {error && (
                    <div className="mt-4 flex items-center space-x-2 bg-red-100 text-red-800 p-3 rounded">
                      <AlertCircle size={18} />
                      <span>{error}</span>
                    </div>
                  )}
                </DialogContent>
              </Dialog> 
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="text-white border-white bg-transparent hover:bg-white hover:text-[#4c2a85] transition-colors duration-300">
                    Contact Us
                  </Button>
                </DialogTrigger>
                <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Us</DialogTitle>
                  <DialogDescription>
                    Fill out this form and we'll get back to you as soon as possible.
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" type="tel" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      rows={4}
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12 relative">
          <div className="hidden md:block relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <LazyLoadImage
              src={images[currentImage]}
              alt={`Recruitment image ${currentImage + 1}`}
              className="rounded-lg w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              aria-label="Previous image">
              <ChevronLeft className="h-6 w-6 text-[#4c2a85]" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              aria-label="Next image">
              <ChevronRight className="h-6 w-6 text-[#4c2a85]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection