
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ChevronLeft, Instagram, Twitter, Facebook, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-marafiq-950 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">المرافق المختصة</h3>
            <p className="mb-6 text-gray-300">
              شركة رائدة في مجال الخدمات والمشاريع المتخصصة، نسعى لتقديم أفضل الحلول بجودة عالية وكفاءة متميزة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>الرئيسية</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>من نحن</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>خدماتنا</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>مشاريعنا</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>المدونة</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>اتصل بنا</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>الخدمات الهندسية</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>الصيانة والتشغيل</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>إدارة المشاريع</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <ChevronLeft size={16} className="ml-1" />
                  <span>الاستشارات الفنية</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">معلومات الاتصال</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="ml-3 mt-1 text-marafiq-500" size={20} />
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center">
                <Phone className="ml-3 text-marafiq-500" size={20} />
                <span className="text-gray-300">+966 12 345 6789</span>
              </li>
              <li className="flex items-center">
                <Mail className="ml-3 text-marafiq-500" size={20} />
                <span className="text-gray-300">info@marafiq.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="ml-3 text-marafiq-500" size={20} />
                <span className="text-gray-300">الأحد - الخميس: 8:00 ص - 5:00 م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} شركة المرافق المختصة المحدودة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
