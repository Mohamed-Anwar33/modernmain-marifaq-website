
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, User, Clock, Search, Tag } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("الكل");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "المرافق المختصة - المدونة";
  }, []);

  const categories = ["الكل", "هندسة", "مشاريع", "تقنية", "استدامة", "إدارة"];

  const blogPosts = [
    {
      id: 1,
      title: "أحدث التقنيات في مجال الهندسة المدنية",
      excerpt: "تعرف على أحدث التقنيات المستخدمة في مجال الهندسة المدنية وتأثيرها على تطوير المشاريع الإنشائية وتحسين كفاءتها وجودتها.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      author: "م. أحمد الشمري",
      date: "15 مارس 2023",
      readTime: "5 دقائق",
      category: "هندسة",
      slug: "latest-civil-engineering-technologies"
    },
    {
      id: 2,
      title: "كيفية اختيار المقاول المناسب لمشروعك",
      excerpt: "دليل شامل يساعدك في اختيار المقاول المناسب لمشروعك مع نصائح مهمة لضمان نجاح التعاون وتحقيق أهداف المشروع.",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
      author: "م. سارة العتيبي",
      date: "28 فبراير 2023",
      readTime: "7 دقائق",
      category: "مشاريع",
      slug: "how-to-choose-the-right-contractor"
    },
    {
      id: 3,
      title: "الاستدامة في المشاريع الهندسية الحديثة",
      excerpt: "أهمية تطبيق معايير الاستدامة في المشاريع الهندسية وتأثيرها الإيجابي على البيئة والاقتصاد على المدى الطويل.",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd",
      author: "د. خالد المنصور",
      date: "10 يناير 2023",
      readTime: "6 دقائق",
      category: "استدامة",
      slug: "sustainability-in-engineering-projects"
    },
    {
      id: 4,
      title: "دور الذكاء الاصطناعي في تطوير المشاريع الهندسية",
      excerpt: "كيف يساهم الذكاء الاصطناعي في تطوير المشاريع الهندسية وتحسين كفاءتها وتقليل التكاليف وزيادة الإنتاجية.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      author: "م. فيصل الدوسري",
      date: "5 أبريل 2023",
      readTime: "8 دقائق",
      category: "تقنية",
      slug: "artificial-intelligence-in-engineering"
    },
    {
      id: 5,
      title: "أفضل الممارسات في إدارة مشاريع البنية التحتية",
      excerpt: "نظرة شاملة على أفضل الممارسات المتبعة في إدارة مشاريع البنية التحتية الكبرى وكيفية تطبيقها بنجاح.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
      author: "م. نورة القحطاني",
      date: "20 فبراير 2023",
      readTime: "10 دقائق",
      category: "إدارة",
      slug: "best-practices-infrastructure-projects"
    },
    {
      id: 6,
      title: "تأثير التغيرات المناخية على تصميم المباني",
      excerpt: "دراسة حول تأثير التغيرات المناخية على معايير تصميم المباني الحديثة والحلول المبتكرة للتكيف معها.",
      image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739",
      author: "د. سامي العمري",
      date: "12 مايو 2023",
      readTime: "7 دقائق",
      category: "استدامة",
      slug: "climate-change-impact-on-building-design"
    },
    {
      id: 7,
      title: "تقنيات المسح ثلاثي الأبعاد في المشاريع الإنشائية",
      excerpt: "استخدامات تقنيات المسح ثلاثي الأبعاد في المشاريع الإنشائية وفوائدها في تحسين الدقة وتوفير الوقت والتكاليف.",
      image: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a",
      author: "م. عبدالله الغامدي",
      date: "8 يونيو 2023",
      readTime: "6 دقائق",
      category: "تقنية",
      slug: "3d-scanning-in-construction"
    },
    {
      id: 8,
      title: "دليل شامل لتخطيط المشاريع الهندسية",
      excerpt: "خطوات تفصيلية لتخطيط المشاريع الهندسية بشكل فعال، من مرحلة الفكرة إلى التنفيذ النهائي.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      author: "م. محمد العتيبي",
      date: "25 أبريل 2023",
      readTime: "9 دقائق",
      category: "إدارة",
      slug: "comprehensive-guide-project-planning"
    },
    {
      id: 9,
      title: "الابتكارات الحديثة في هندسة الجسور",
      excerpt: "عرض لأحدث الابتكارات في مجال تصميم وبناء الجسور والتقنيات المستخدمة لزيادة متانتها وعمرها الافتراضي.",
      image: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff",
      author: "د. فهد المالكي",
      date: "3 مارس 2023",
      readTime: "6 دقائق",
      category: "هندسة",
      slug: "modern-innovations-bridge-engineering"
    }
  ];

  // Filter posts by category and search term
  const filteredPosts = blogPosts
    .filter(post => activeCategory === "الكل" || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-marafiq-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">المدونة</h1>
            <p className="text-xl text-gray-300">
              آخر المقالات والأخبار في مجال الهندسة والمشاريع
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              {/* Search */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="بحث في المقالات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marafiq-500"
                  />
                  <Search className="absolute top-3 left-3 text-gray-400" size={18} />
                </div>
              </div>
              
              {/* Categories */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">التصنيفات</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setActiveCategory(category)}
                        className={`flex items-center w-full text-right px-3 py-2 rounded-md transition-colors ${
                          activeCategory === category
                            ? "bg-marafiq-100 text-marafiq-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Tag size={16} className="ml-2" />
                        <span>{category}</span>
                        <span className="mr-auto bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-full">
                          {category === "الكل"
                            ? blogPosts.length
                            : blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Recent Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">أحدث المقالات</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="flex items-start group">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="mr-3">
                        <h4 className="font-medium leading-tight group-hover:text-marafiq-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {filteredPosts.length > 0 ? (
                <div className="space-y-8">
                  {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md animated-card">
                      <Link to={`/blog/${post.slug}`} className="block">
                        <div className="relative h-60 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                        </div>
                      </Link>
                      <div className="p-6">
                        <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="ml-1" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <User size={14} className="ml-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="ml-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="inline-block bg-marafiq-100 text-marafiq-700 px-3 py-1 rounded-full text-xs">
                            {post.category}
                          </span>
                        </div>
                        <Link to={`/blog/${post.slug}`} className="block mb-4">
                          <h2 className="text-2xl font-bold hover:text-marafiq-600 transition-colors">{post.title}</h2>
                        </Link>
                        <p className="text-gray-600 mb-6">
                          {post.excerpt}
                        </p>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="inline-block bg-marafiq-600 hover:bg-marafiq-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                        >
                          قراءة المزيد
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-bold mb-4">لا توجد مقالات</h3>
                  <p className="text-gray-600">
                    لا توجد مقالات تطابق معايير البحث الحالية. يرجى تجربة كلمات بحث أخرى أو تصفية مختلفة.
                  </p>
                  <button 
                    onClick={() => {setSearchTerm(""); setActiveCategory("الكل");}}
                    className="mt-4 text-marafiq-600 hover:text-marafiq-700 font-medium"
                  >
                    عرض جميع المقالات
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
