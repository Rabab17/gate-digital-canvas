
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">About Us</h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 lg:h-[500px] relative z-10 overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3000"
                  alt="E-Business Gate Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 -left-10 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full filter blur-3xl"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="mb-6">
              At E-Business Gate, we envision a world where businesses of all sizes can harness the full potential of digital 
              technologies. We're committed to delivering innovative, scalable, and impactful digital solutions that drive 
              growth and transformation.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="mb-6">
              We empower businesses through cutting-edge digital innovation, expert guidance, and tailored strategies
              that yield measurable results. Our collaborative approach ensures that we understand your unique challenges 
              and deliver solutions that exceed expectations.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Excellence</strong> - We strive for the highest quality in everything we do</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Innovation</strong> - We embrace new technologies and creative solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Integrity</strong> - We build relationships based on trust and transparency</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Collaboration</strong> - We work as partners with our clients to achieve shared goals</span>
              </li>
            </ul>
            
            <Button className="btn-primary">Learn More About Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
