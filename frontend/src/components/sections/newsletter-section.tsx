import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
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
  )
}