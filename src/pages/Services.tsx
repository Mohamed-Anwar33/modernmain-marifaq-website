
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Settings, Activity, Hammer, LineChart, Shield, Users, Database, Monitor, Zap, Cloud, Lock, Headphones } from "lucide-react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "المرافق المختصة - خدماتنا";
  }, []);

  const mainServices = [
    {
      id: 1,
      title: "الخدمات الهندسية",
      description: "نقدم مجموعة شاملة من الخدمات الهندسية بأعلى المعايير، بدءاً من مرحلة التصميم وحتى الإشراف على التنفيذ.",
      icon: <Settings className="text-marafiq-600" size={40} />,
      features: [
        "تصميم معماري وإنشائي",
        "دراسات الجدوى الفنية",
        "تصميم أنظمة التكييف والتهوية",
        "تصميم الأنظمة الكهربائية والميكانيكية",
        "الإشراف على التنفيذ"
      ]
    },
    {
      id: 2,
      title: "إدارة المشاريع",
      description: "نضمن إنجاز مشاريعك بكفاءة عالية ضمن الميزانية والوقت المحدد من خلال فريق إدارة مشاريع متخصص.",
      icon: <Activity className="text-marafiq-600" size={40} />,
      features: [
        "التخطيط الاستراتيجي للمشاريع",
        "إدارة الجدول الزمني والميزانية",
        "إدارة المخاطر والجودة",
        "إدارة الموارد والمشتريات",
        "التنسيق بين الأطراف المختلفة"
      ]
    },
    {
      id: 3,
      title: "الصيانة والتشغيل",
      description: "نحافظ على استمرارية عمل مرافقك بكفاءة من خلال خدمات الصيانة الدورية والطارئة والتشغيل الاحترافي.",
      icon: <Hammer className="text-marafiq-600" size={40} />,
      features: [
        "الصيانة الوقائية والدورية",
        "الصيانة التصحيحية والطارئة",
        "إدارة المرافق",
        "تحسين كفاءة التشغيل",
        "التحديث والتطوير المستمر"
      ]
    },
    {
      id: 4,
      title: "الاستشارات الفنية",
      description: "نقدم استشارات فنية متخصصة تساعدك في اتخاذ القرارات المناسبة لمشاريعك وتحسين أدائها.",
      icon: <LineChart className="text-marafiq-600" size={40} />,
      features: [
        "تقييم المشاريع والأصول",
        "دراسات تحسين الأداء",
        "حلول توفير الطاقة",
        "مراجعة التصاميم والمخططات",
        "حل المشكلات الفنية"
      ]
    }
  ];

  const additionalServices = [
    {
      id: 5,
      title: "خدمات الأمن والسلامة",
      description: "حلول متكاملة لأنظمة الأمن والسلامة وفق أحدث المعايير العالمية.",
      icon: <Shield className="text-marafiq-600" size={28} />
    },
    {
      id: 6,
      title: "التطوير والتدريب",
      description: "برامج تطوير وتدريب متخصصة للكوادر الفنية والهندسية.",
      icon: <Users className="text-marafiq-600" size={28} />
    },
    {
      id: 7,
      title: "أنظمة إدارة البيانات",
      description: "حلول متكاملة لإدارة وتحليل البيانات لدعم اتخاذ القرار.",
      icon: <Database className="text-marafiq-600" size={28} />
    },
    {
      id: 8,
      title: "الأنظمة الذكية",
      description: "تصميم وتنفيذ أنظمة المباني الذكية وأتمتة العمليات.",
      icon: <Monitor className="text-marafiq-600" size={28} />
    },
    {
      id: 9,
      title: "حلول الطاقة المتجددة",
      description: "تصميم وتنفيذ أنظمة الطاقة المتجددة والمستدامة.",
      icon: <Zap className="text-marafiq-600" size={28} />
    },
    {
      id: 10,
      title: "الحوسبة السحابية",
      description: "حلول تقنية متكاملة تعتمد على الحوسبة السحابية.",
      icon: <Cloud className="text-marafiq-600" size={28} />
    },
    {
      id: 11,
      title: "أمن المعلومات",
      description: "حماية البيانات والأنظمة من التهديدات الإلكترونية.",
      icon: <Lock className="text-marafiq-600" size={28} />
    },
    {
      id: 12,
      title: "الدعم الفني",
      description: "خدمات دعم فني متكاملة على مدار الساعة.",
      icon: <Headphones className="text-marafiq-600" size={28} />
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-marafiq-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا</h1>
            <p className="text-xl text-gray-300">
              نقدم مجموعة متكاملة من الخدمات الهندسية والفنية عالية الجودة
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block mx-auto">خدماتنا الرئيسية</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              نقدم مجموعة متنوعة من الخدمات عالية الجودة المصممة لتلبية احتياجات مشاريعك
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div 
                key={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="flex justify-center lg:justify-start mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-marafiq-100 text-marafiq-600 rounded-full w-5 h-5 flex items-center justify-center ml-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2">
                  <img 
                    src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1486312338219-ce68d2c6f44d' : '1580893246525-06673d78f2c4'}`} 
                    alt={service.title} 
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block mx-auto">خدمات إضافية</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              مجموعة متنوعة من الخدمات المتخصصة لتلبية مختلف احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-md animated-card">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-marafiq-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى خدماتنا؟</h2>
            <p className="text-xl text-gray-300 mb-8">
              لا تتردد في التواصل معنا للحصول على المزيد من المعلومات أو طلب عرض سعر
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

export default Services;
