
import { useState } from "react";
import { Quote, ChevronRight, ChevronLeft } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "أحمد محمد",
      position: "مدير عام شركة الإنشاءات المتقدمة",
      content: "تعاملنا مع شركة المرافق المختصة في العديد من المشاريع، وقد أثبتوا احترافية عالية والتزاماً تاماً بالجودة والمواعيد المحددة. فريق عمل متميز وخدمة ممتازة.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 2,
      name: "سارة عبدالله",
      position: "مهندسة معمارية - شركة التطوير العقاري",
      content: "أنصح بالتعامل مع شركة المرافق المختصة لاحترافيتهم العالية ودقة تنفيذهم للمشاريع. لقد ساعدونا في إنجاز مشروعنا بجودة استثنائية وضمن الميزانية المحددة.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      id: 3,
      name: "خالد عمر",
      position: "مدير التطوير - مجموعة الفهد للاستثمار",
      content: "تميزت شركة المرافق المختصة بالاحترافية والمصداقية في تنفيذ مشروعنا. فريق عمل متعاون وحلول إبداعية للتحديات التي واجهتنا. تجربة ممتازة ونتطلع للعمل معهم مجدداً.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-marafiq-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto text-white">
            آراء عملائنا
            <span className="absolute bottom-0 right-0 w-20 h-1 bg-marafiq-500 rounded-full -mb-3"></span>
          </h2>
          <p className="text-lg text-gray-300 mt-6 max-w-3xl mx-auto">
            نفخر بثقة عملائنا في خدماتنا، واستماع آرائهم يساعدنا على التطور المستمر
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-lg relative">
            <Quote className="absolute top-6 right-6 text-marafiq-500/20" size={80} />
            
            <div className="relative z-10">
              <p className="text-lg md:text-xl mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-xl">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-300">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-marafiq-800 hover:bg-marafiq-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronRight size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-marafiq-800 hover:bg-marafiq-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-marafiq-500" : "bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
