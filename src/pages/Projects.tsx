
import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const categories = ["الكل", "المباني", "البنية التحتية", "الطاقة", "المياه"];
  const [activeCategory, setActiveCategory] = useState("الكل");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "المرافق المختصة - مشاريعنا";
  }, []);

  const projects = [
    {
      id: 1,
      title: "برج الأعمال التجاري",
      category: "المباني",
      description: "برج مكاتب تجارية مكون من 20 طابقاً بمساحة إجمالية 30,000 متر مربع، يتضمن مرافق متكاملة ونظام إدارة ذكي للمبنى.",
      location: "الرياض، المملكة العربية السعودية",
      year: "2022",
      client: "شركة التطوير العقاري",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544"
    },
    {
      id: 2,
      title: "شبكة طرق متكاملة",
      category: "البنية التحتية",
      description: "تصميم وتنفيذ شبكة طرق بطول 120 كم، تتضمن جسوراً وأنفاقاً ونظام إضاءة ذكي وأنظمة مراقبة متطورة.",
      location: "المنطقة الشرقية، المملكة العربية السعودية",
      year: "2021",
      client: "وزارة النقل",
      image: "https://images.unsplash.com/photo-1543393470-b2d900fb7a44"
    },
    {
      id: 3,
      title: "محطة طاقة شمسية",
      category: "الطاقة",
      description: "تصميم وتنفيذ محطة طاقة شمسية بقدرة 50 ميجاوات، تلبي احتياجات أكثر من 15,000 منزل من الطاقة النظيفة والمتجددة.",
      location: "تبوك، المملكة العربية السعودية",
      year: "2023",
      client: "شركة الكهرباء السعودية",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276"
    },
    {
      id: 4,
      title: "محطة معالجة مياه",
      category: "المياه",
      description: "تصميم وتنفيذ محطة معالجة مياه بطاقة إنتاجية 50,000 متر مكعب يومياً، تعتمد على أحدث التقنيات في معالجة المياه.",
      location: "جدة، المملكة العربية السعودية",
      year: "2022",
      client: "شركة المياه الوطنية",
      image: "https://images.unsplash.com/photo-1504693608509-2e01c67e1804"
    },
    {
      id: 5,
      title: "المجمع السكني الذكي",
      category: "المباني",
      description: "مجمع سكني ذكي يضم 200 وحدة سكنية مجهزة بأحدث أنظمة المباني الذكية وحلول توفير الطاقة.",
      location: "الدمام، المملكة العربية السعودية",
      year: "2023",
      client: "شركة الإسكان التطويرية",
      image: "https://images.unsplash.com/photo-1517327421915-a9566ae5af68"
    },
    {
      id: 6,
      title: "مشروع سد وادي",
      category: "المياه",
      description: "تصميم وتنفيذ سد بارتفاع 40 متراً وطول 300 متر، بسعة تخزينية تبلغ 50 مليون متر مكعب من المياه.",
      location: "عسير، المملكة العربية السعودية",
      year: "2021",
      client: "وزارة البيئة والمياه والزراعة",
      image: "https://images.unsplash.com/photo-1505219421955-83021f700fd5"
    },
    {
      id: 7,
      title: "مجمع مراكز بيانات",
      category: "البنية التحتية",
      description: "تصميم وتنفيذ مجمع مراكز بيانات متطور يلبي متطلبات التحول الرقمي وفق أحدث المعايير العالمية.",
      location: "الرياض، المملكة العربية السعودية",
      year: "2023",
      client: "هيئة الاتصالات وتقنية المعلومات",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
    },
    {
      id: 8,
      title: "محطة طاقة رياح",
      category: "الطاقة",
      description: "تصميم وتنفيذ محطة طاقة رياح بقدرة 30 ميجاوات، تضم 15 توربينة رياح عملاقة.",
      location: "الجوف، المملكة العربية السعودية",
      year: "2022",
      client: "وزارة الطاقة",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7"
    },
    {
      id: 9,
      title: "مستشفى متكامل",
      category: "المباني",
      description: "تصميم وتنفيذ مستشفى بسعة 300 سرير، مجهز بأحدث التقنيات الطبية والأنظمة الذكية.",
      location: "المدينة المنورة، المملكة العربية السعودية",
      year: "2021",
      client: "وزارة الصحة",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8bc3f"
    }
  ];

  // Filter projects by active category
  const filteredProjects = activeCategory === "الكل"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-marafiq-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">مشاريعنا</h1>
            <p className="text-xl text-gray-300">
              استعرض بعض أعمالنا المميزة في مختلف المجالات
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
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
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden shadow-md animated-card"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-marafiq-600/90 text-white text-sm px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description.substring(0, 100)}...
                  </p>
                  <div className="flex flex-wrap gap-y-2">
                    <div className="w-full sm:w-1/2">
                      <span className="text-gray-500 text-sm">الموقع:</span>
                      <p className="text-gray-800">{project.location}</p>
                    </div>
                    <div className="w-full sm:w-1/2">
                      <span className="text-gray-500 text-sm">العام:</span>
                      <p className="text-gray-800">{project.year}</p>
                    </div>
                    <div className="w-full">
                      <span className="text-gray-500 text-sm">العميل:</span>
                      <p className="text-gray-800">{project.client}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-marafiq-600 font-medium hover:text-marafiq-700 transition-colors"
                    >
                      <span>تفاصيل المشروع</span>
                      <ArrowLeft size={16} className="mr-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">لا توجد مشاريع في هذه الفئة حالياً</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-marafiq-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">هل لديك مشروع؟</h2>
            <p className="text-xl text-gray-300 mb-8">
              دعنا نساعدك في تحويل فكرتك إلى واقع. فريقنا جاهز لمساعدتك
            </p>
            <Link to="/contact" className="btn-primary">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
