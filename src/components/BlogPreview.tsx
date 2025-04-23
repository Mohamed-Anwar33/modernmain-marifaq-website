
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "أحدث التقنيات في مجال الهندسة المدنية",
      excerpt: "تعرف على أحدث التقنيات المستخدمة في مجال الهندسة المدنية وتأثيرها على تطوير المشاريع الإنشائية...",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      author: "م. أحمد الشمري",
      date: "15 مارس 2023",
      slug: "latest-civil-engineering-technologies"
    },
    {
      id: 2,
      title: "كيفية اختيار المقاول المناسب لمشروعك",
      excerpt: "دليل شامل يساعدك في اختيار المقاول المناسب لمشروعك مع نصائح مهمة لضمان نجاح التعاون...",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
      author: "م. سارة العتيبي",
      date: "28 فبراير 2023",
      slug: "how-to-choose-the-right-contractor"
    },
    {
      id: 3,
      title: "الاستدامة في المشاريع الهندسية الحديثة",
      excerpt: "أهمية تطبيق معايير الاستدامة في المشاريع الهندسية وتأثيرها الإيجابي على البيئة والاقتصاد...",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd",
      author: "د. خالد المنصور",
      date: "10 يناير 2023",
      slug: "sustainability-in-engineering-projects"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">آخر المقالات</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            اطلع على آخر المقالات والأخبار في مجال الهندسة والمشاريع
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md animated-card">
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <div className="flex items-center ml-4">
                    <Calendar size={14} className="ml-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="ml-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="block mb-3">
                  <h3 className="text-xl font-bold hover:text-marafiq-600 transition-colors">{post.title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-marafiq-600 font-medium hover:text-marafiq-700 transition-colors"
                >
                  <span>قراءة المزيد</span>
                  <ArrowLeft size={16} className="mr-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/blog" className="btn-primary">
            عرض جميع المقالات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
