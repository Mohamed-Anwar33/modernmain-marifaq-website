
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-marafiq-950 to-marafiq-800 min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              حلول هندسية متكاملة <span className="text-marafiq-400">لمشاريع المستقبل</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              نقدم خدمات هندسية احترافية تلبي احتياجات عملائنا بأعلى معايير الجودة والكفاءة، 
              مع التزامنا التام بالمواعيد والميزانيات المحددة.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary flex items-center">
                <span>استكشف خدماتنا</span>
                <ArrowLeft className="mr-2" size={18} />
              </Link>
              <Link to="/contact" className="btn-outline">
                تواصل معنا
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
              alt="المرافق المختصة" 
              className="rounded-lg shadow-2xl animate-fade-in w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
