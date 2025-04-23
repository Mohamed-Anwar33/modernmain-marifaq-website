
import { useEffect } from "react";
import { ArrowLeft, CheckCircle, Users, BookOpen, Target, Medal } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "المرافق المختصة - من نحن";
  }, []);

  const values = [
    {
      icon: <Users className="text-marafiq-600" size={36} />,
      title: "العمل الجماعي",
      description: "نؤمن بأن العمل الجماعي هو أساس النجاح، ونعمل معاً كفريق واحد لتحقيق أهدافنا المشتركة."
    },
    {
      icon: <BookOpen className="text-marafiq-600" size={36} />,
      title: "التعلم المستمر",
      description: "نسعى دائماً للتطور وتحسين مهاراتنا من خلال التعلم المستمر ومواكبة أحدث التقنيات والمعايير."
    },
    {
      icon: <Target className="text-marafiq-600" size={36} />,
      title: "الالتزام بالجودة",
      description: "نلتزم بتقديم أعلى مستويات الجودة في جميع مشاريعنا وخدماتنا لتحقيق رضا عملائنا."
    },
    {
      icon: <Medal className="text-marafiq-600" size={36} />,
      title: "النزاهة والمصداقية",
      description: "نعمل بنزاهة ومصداقية في جميع تعاملاتنا، مما يعزز ثقة عملائنا وشركائنا في خدماتنا."
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-marafiq-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-gray-300">
              نبذة عن شركة المرافق المختصة المحدودة وقيمنا ورؤيتنا
            </p>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative inline-block">
                قصتنا
                <span className="absolute bottom-0 right-0 w-20 h-1 bg-marafiq-500 rounded-full -mb-3"></span>
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                تأسست شركة المرافق المختصة المحدودة في عام 2013 بهدف تقديم حلول هندسية متكاملة وخدمات فنية عالية الجودة للقطاعين العام والخاص في المملكة العربية السعودية ودول الخليج العربي.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                بدأت الشركة بفريق صغير من المهندسين والفنيين المتخصصين، ومع مرور الوقت توسعت أعمالنا وازداد فريقنا ليضم اليوم أكثر من 50 متخصصاً في مختلف المجالات الهندسية والفنية.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                نفخر بسجلنا الحافل بالمشاريع الناجحة والتي تجاوزت 150 مشروعاً في مختلف المجالات، من المباني السكنية والتجارية إلى مشاريع البنية التحتية والطاقة والمياه.
              </p>
              <Link to="/services" className="btn-primary inline-flex items-center">
                <span>خدماتنا</span>
                <ArrowLeft className="mr-2" size={18} />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="قصة المرافق المختصة" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-marafiq-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">+10</p>
                <p className="text-sm">سنوات من الخبرة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-md animated-card">
              <h3 className="text-2xl font-bold mb-6 text-marafiq-950">رؤيتنا</h3>
              <p className="text-gray-700 mb-6">
                أن نكون الشركة الرائدة في مجال الخدمات الهندسية والفنية المتكاملة في المملكة العربية السعودية ومنطقة الخليج، من خلال تقديم حلول مبتكرة ومستدامة تسهم في بناء مستقبل أفضل.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-marafiq-600 ml-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">الريادة في مجال الخدمات الهندسية</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-marafiq-600 ml-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">تقديم حلول مبتكرة ومستدامة</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-marafiq-600 ml-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">المساهمة في بناء مستقبل أفضل</span>
                </li>
              </ul>
            </div>
            
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-md animated-card">
              <h3 className="text-2xl font-bold mb-6 text-marafiq-950">رسالتنا</h3>
              <p className="text-gray-700 mb-6">
                توفير خدمات هندسية وفنية متميزة بأعلى معايير الجودة والكفاءة، وبناء علاقات طويلة الأمد مع عملائنا من خلال تقديم حلول متكاملة تلبي احتياجاتهم وتتجاوز توقعاتهم.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-marafiq-600 ml-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">تقديم خدمات بأعلى معايير الجودة</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-marafiq-600 ml-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">بناء علاقات طويلة الأمد مع العملاء</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-marafiq-600 ml-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">تجاوز توقعات العملاء</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              قيمنا
              <span className="absolute bottom-0 right-0 w-20 h-1 bg-marafiq-500 rounded-full -mb-3"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              القيم الأساسية التي تحكم عملنا وتوجه سلوكنا في جميع تعاملاتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center animated-card">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              فريقنا
              <span className="absolute bottom-0 right-0 w-20 h-1 bg-marafiq-500 rounded-full -mb-3"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              فريقنا المتميز من الخبراء والمتخصصين الذين يعملون بجد لتحقيق رؤيتنا
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animated-card">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="محمد العتيبي" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">م. محمد العتيبي</h3>
                <p className="text-marafiq-600 mb-4">الرئيس التنفيذي</p>
                <p className="text-gray-600 text-sm">
                  خبرة أكثر من 15 عاماً في مجال الهندسة وإدارة المشاريع
                </p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animated-card">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" 
                  alt="سارة الشمري" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">م. سارة الشمري</h3>
                <p className="text-marafiq-600 mb-4">مدير العمليات</p>
                <p className="text-gray-600 text-sm">
                  متخصصة في إدارة المشاريع الهندسية مع خبرة 10 سنوات
                </p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animated-card">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857" 
                  alt="خالد السعيد" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">م. خالد السعيد</h3>
                <p className="text-marafiq-600 mb-4">مدير المشاريع</p>
                <p className="text-gray-600 text-sm">
                  خبير في إدارة المشاريع الكبرى والتخطيط الاستراتيجي
                </p>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md animated-card">
              <div className="relative overflow-hidden h-64">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                  alt="نورة القحطاني" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">م. نورة القحطاني</h3>
                <p className="text-marafiq-600 mb-4">مدير الجودة</p>
                <p className="text-gray-600 text-sm">
                  متخصصة في ضبط الجودة وتطبيق المعايير العالمية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-marafiq-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">هل أنت مستعد للعمل معنا؟</h2>
            <p className="text-xl text-gray-300 mb-8">
              انضم إلى قائمة عملائنا المميزين واستفد من خدماتنا المتكاملة
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                تواصل معنا
              </Link>
              <Link to="/services" className="btn-outline border-white text-white hover:bg-white/10">
                استكشف خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
