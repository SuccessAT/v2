// import Image from "next/image"
import { forwardRef } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Link } from "react-router-dom"

const CaseStudiesSection = forwardRef<HTMLElement>((props, ref) => {
  const image3 = "/assets/images/blog-2.jpg"
  const image4 = "/assets/images/blog-3.jpg"
  const image5 = "/assets/images/blog-4.jpg"

  const  caseStudies = [
    {
      title: "Building Agile Teams for Digital Transformation",
      description: "How we helped a leading retail company build a high-performing software development team in 6 weeks.",
      image: image3
    },
    {
      title: "Unlocking Talent for SaaS Expansion",
      description: "Scaling a tech startup's team from 10 to 50 engineers using our AI-matching platform.",
      image: image4
    },
    {
      title: "Data-Driven Recruitment for Global Enterprises",
      description: "Leveraging our web scraper to provide a multinational company with real-time market insights for targeted recruitment.",
      image: image5
    }
  ]

  return (
    <section 
      ref={ref}
      id="case-studies"
      className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Check out some of our successful recruitment and project solutions.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <LazyLoadImage
                src={study.image}
                alt={`Case Study ${index + 1}`}
                width={400}
                height={200}
                className="w-full"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4">
                  {study.description}
                </p>
                <Link to="#" className="text-[#4c2a85] hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

export default CaseStudiesSection