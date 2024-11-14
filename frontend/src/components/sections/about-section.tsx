import { LazyLoadImage } from 'react-lazy-load-image-component'; // Using lazy loading for images
import { Clock, Users, BarChart2, Headphones, CheckCircle, ChevronLeft, ChevronRight, Menu, X, AlertCircle } from "lucide-react"
import { Link } from 'react-router-dom'
import { forwardRef } from 'react'

const AboutSection = forwardRef<HTMLElement>((props, ref) => {

  const image2 = "/assets/images/blog-1.jpg"
  const image3 = "/assets/images/blog-2.jpg"
  
  return (
    <div> 
      <section 
        ref={ref} 
        id="about"
        className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="hidden md:block md:w-1/2 mb-8 md:mb-0">
            <LazyLoadImage
              src={image2}
              alt="Recruitment solutions illustration"
              width={800}
              height={800}
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">
              We Bring the Right Solutions to Make Hiring Easier for You.
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#4c2a85] mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">AI-Powered Talent Matching</h3>
                  <p className="text-gray-600">Hire the best-fit candidates faster.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#4c2a85] mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">On-Demand Talent</h3>
                  <p className="text-gray-600">Scale teams for specific projects without long-term commitments.</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-[#4c2a85] mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Exclusive Market Data</h3>
                  <p className="text-gray-600">Access powerful insights through our proprietary data scraping tools.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="case-studies" className="py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">
            We Help You Scale Talent Efficiently and Profitably.
          </h2>
          <p className="text-gray-600 mb-6">
            With our recruitment platform, we ensure you have complete control over your talent pipeline and project staffing. We help you scale with flexibility and speed while keeping operational costs in check.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-8 h-8 bg-[#4c2a85] rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p>Quickly assemble project-based teams to meet specific goals.</p>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 bg-[#4c2a85] rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p>Continuous talent matching backed by AI.</p>
            </li>
            <li className="flex items-center">
              <div className="w-8 h-8 bg-[#4c2a85] rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <p>Data-driven recruitment strategies powered by real-time scraping tools.</p>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <LazyLoadImage
            //src="../../public/assets/images/blog-2.jpg?height=400&width=400"
            src={image3}
            alt="Talent scaling illustration"
            width={700}
            height={700}
          />
        </div>
      </div>
      </section>

      <section className="py-12 bg-[#4c2a85] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "7518", label: "Successful Placements" },
            { number: "3472", label: "Happy Clients" },
            { number: "2184", label: "Expert Contractors" },
            { number: "4523", label: "Project Successes" },
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      </section>
    </div>
  )
})

export default AboutSection