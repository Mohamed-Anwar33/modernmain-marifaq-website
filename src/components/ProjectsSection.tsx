
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ProjectsSection = () => {
  const categories = ["الكل", "المباني", "البنية التحتية", "الطاقة", "المياه"];
  const [activeCategory, setActiveCategory] = useState("الكل");

  const projects = [
    {
      id: 1,
      title: "برج الأعمال التجاري",
      category: "المباني",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544",
      link: "/projects"
    },
    {
      id: 2,
      title: "شبكة طرق متكاملة",
      category: "البنية التحتية",
      image: "https://images.unsplash.com/photo-1543393470-b2d900fb7a44",
      link: "/projects"
    },
    {
      id: 3,
      title: "محطة طاقة شمسية",
      category: "الطاقة",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
      link: "/projects"
    },
    {
      id: 4,
      title: "محطة معالجة مياه",
      category: "المياه",
      image: "https://images.unsplash.com/photo-1504693608509-2e01c67e1284",
      link: "/projects"
    },
    {
      id: 5,
      title: "المجمع السكني الذكي",
      category: "المباني",
      image: "https://images.unsplash.com/photo-1517327421915-a9566ae5af68",
      link: "/projects"
    },
    {
      id: 6,
      title: "مشروع سد وادي",
      category: "المياه",
      image: "https://images.unsplash.com/photo-1505219421955-83021f700fd5",
      link: "/projects"
    }
  ];

  // Filter projects by active category
  const filteredProjects = activeCategory === "الكل"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">مشاريعنا</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            نفخر بتنفيذ مجموعة من المشاريع الناجحة في مختلف القطاعات، تعكس خبرتنا وكفاءتنا والتزامنا بالجودة
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-marafiq-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Link
              to={project.link}
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md animated-card"
            >
              <div className="aspect-w-16 aspect-h-10 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-marafiq-950/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <span className="inline-block bg-marafiq-600/80 text-white text-sm px-3 py-1 rounded-full mb-4">
                  {project.category}
                </span>
                <div className="flex items-center text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>التفاصيل</span>
                  <ArrowLeft size={16} className="mr-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary">
            عرض جميع المشاريع
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
