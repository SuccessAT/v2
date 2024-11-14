import { Users, BarChart2, Clock, Headphones } from "lucide-react"
import { forwardRef } from "react"
import { Link } from 'react-router-dom'

const ServicesSection = forwardRef<HTMLElement>((props, ref) => {
  const services = [
    { icon: Users, title: "On-Demand Talent Teams", description: "Get fully managed project-based teams assembled on demand. We handpick experts to bring your vision to life, scaling up or down as your project requires." },
    { icon: BarChart2, title: "AI-Driven Talent Matching", description: "Using advanced algorithms, we connect you with tech professionals who are not just skilled but the perfect cultural fit for your organization." },
    { icon: Clock, title: "Real-Time Data Insights", description: "Our web scraping tool collects real-time public profiles and talent data, giving you up-to-date access to a global talent pool." },
    { icon: Headphones, title: "Full Recruitment Support", description: "We provide 24/7 recruitment assistance, from securing talent to managing contracts, payroll, and compliance." },
  ]

  return (
    <section ref={ref} id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-4">WHAT WE DO</h2>
            <p className="text-xl text-center mb-12">
              Our Services Are Designed to Meet Your Talent Needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="w-12 h-12 bg-[#4c2a85] rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
})

export default ServicesSection