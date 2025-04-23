
import { Link } from "react-router-dom";
import { ArrowLeft, Settings, Activity, Hammer, LineChart, Shield, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "الخدمات الهندسية",
      description: "خدمات تصميم وإشراف هندسي متكاملة لمختلف المشاريع بأعلى المعايير.",
      icon: <Settings className="text-marafiq-600" size={40} />,
      link: "/services"
    },
    {
      id: 2,
      title: "إدارة المشاريع",
      description: "إدارة احترافية للمشاريع بكفاءة عالية لضمان الإنجاز في الوقت المحدد.",
      icon: <Activity className="text-marafiq-600" size={40} />,
      link: "/services"
    },
    {
      id: 3,
      title: "الصيانة والتشغيل",
      description: "خدمات صيانة وتشغيل دورية وطارئة لضمان استمرارية عمل المرافق.",
      icon: <Hammer className="text-marafiq-600" size={40} />,
      link: "/services"
    },
    {
      id: 4,
      title: "الاستشارات الفنية",
      description: "استشارات فنية متخصصة لمساعدتك في اتخاذ القرارات المناسبة لمشاريعك.",
      icon: <LineChart className="text-marafiq-600" size={40} />,
      link: "/services"
    },
    {
      id: 5,
      title: "خدمات الأمن والسلامة",
      description: "حلول متكاملة لأنظمة الأمن والسلامة وفق أحدث المعايير العالمية.",
      icon: <Shield className="text-marafiq-600" size={40} />,
      link: "/services"
    },
    {
      id: 6,
      title: "التطوير والتدريب",
      description: "برامج تطوير وتدريب متخصصة للكوادر الفنية والهندسية.",
      icon: <Users className="text-marafiq-600" size={40} />,
      link: "/services"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">خدماتنا</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من الخدمات الهندسية والفنية عالية الجودة
            لتلبية احتياجات عملائنا في مختلف القطاعات
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 shadow-md animated-card"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to={service.link} 
                className="inline-flex items-center text-marafiq-600 font-medium hover:text-marafiq-700 transition-colors"
              >
                <span>المزيد</span>
                <ArrowLeft size={16} className="mr-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary">
            عرض جميع الخدمات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
