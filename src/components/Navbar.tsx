
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { title: "الرئيسية", path: "/" },
    { title: "من نحن", path: "/about" },
    { title: "خدماتنا", path: "/services" },
    { title: "مشاريعنا", path: "/projects" },
    { title: "المدونة", path: "/blog" },
    { title: "اتصل بنا", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-marafiq-950">
              المرافق <span className="text-marafiq-600">المختصة</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 mx-1 rounded-md transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-marafiq-600 font-medium"
                    : "text-gray-700 hover:text-marafiq-600"
                }`}
                onClick={closeMenu}
              >
                {link.title}
              </Link>
            ))}
            <Button className="bg-marafiq-600 hover:bg-marafiq-700 mr-2" asChild>
              <Link to="/contact">احصل على عرض سعر</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 p-2 focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-lg mt-4 shadow-lg animate-fade-in">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-6 py-3 ${
                    location.pathname === link.path
                      ? "text-marafiq-600 font-medium"
                      : "text-gray-700"
                  }`}
                  onClick={closeMenu}
                >
                  {link.title}
                </Link>
              ))}
              <div className="px-6 py-3">
                <Button className="w-full bg-marafiq-600 hover:bg-marafiq-700" asChild>
                  <Link to="/contact" onClick={closeMenu}>احصل على عرض سعر</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
