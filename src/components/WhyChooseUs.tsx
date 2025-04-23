
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "خبرة واسعة",
      description: "نمتلك فريقاً من المهندسين والفنيين ذوي الخبرة الواسعة في مختلف المجالات."
    },
    {
      id: 2,
      title: "جودة عالية",
      description: "نلتزم بأعلى معايير الجودة في جميع مشاريعنا وخدماتنا."
    },
    {
      id: 3,
      title: "التزام بالمواعيد",
      description: "نضمن إنجاز المشاريع في الوقت المحدد دون تأخير."
    },
    {
      id: 4,
      title: "أسعار تنافسية",
      description: "نقدم خدماتنا بأسعار تنافسية مع الحفاظ على أعلى مستويات الجودة."
    },
    {
      id: 5,
      title: "دعم فني مستمر",
      description: "نوفر دعماً فنياً مستمراً لعملائنا بعد الانتهاء من المشاريع."
    },
    {
      id: 6,
      title: "تقنيات متطورة",
      description: "نستخدم أحدث التقنيات والمعدات في تنفيذ مشاريعنا."
    }
  ];

  return (
    <section className="py-20 bg-marafiq-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496307653780-42ee777d4833')] bg-cover bg-fixed opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:ml-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 relative inline-block">
              لماذا تختار المرافق المختصة؟
              <span className="absolute bottom-0 right-0 w-2/3 h-1 bg-marafiq-500 rounded-full -mb-3"></span>
            </h2>
            
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex">
                  <CheckCircle className="text-marafiq-500 ml-3 mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-gray-300">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-marafiq-900/50 p-8 rounded-lg backdrop-blur-sm">
            <img 
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0" 
              alt="لماذا تختارنا" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
