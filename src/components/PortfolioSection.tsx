
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
}

const categories = ["All", "E-commerce", "Corporate", "Mobile Apps"];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "https://via.placeholder.com/600x400?text=E-commerce+Project",
      link: "#",
    },
    {
      id: 2,
      title: "Corporate Website Redesign",
      category: "Corporate",
      image: "https://via.placeholder.com/600x400?text=Corporate+Website",
      link: "#",
    },
    {
      id: 3,
      title: "Food Delivery App",
      category: "Mobile Apps",
      image: "https://via.placeholder.com/600x400?text=Mobile+App",
      link: "#",
    },
    {
      id: 4,
      title: "Fashion Online Store",
      category: "E-commerce",
      image: "https://via.placeholder.com/600x400?text=Fashion+Store",
      link: "#",
    },
    {
      id: 5,
      title: "Financial Services Dashboard",
      category: "Corporate",
      image: "https://via.placeholder.com/600x400?text=Financial+Dashboard",
      link: "#",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      image: "https://via.placeholder.com/600x400?text=Fitness+App",
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Our Portfolio</h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.category}</p>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-accent text-gray-800 rounded-md font-medium text-sm"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">See Full Portfolio</Button>
        </div>
      </div>
    </section>
  );
}
