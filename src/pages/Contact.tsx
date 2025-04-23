
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "المرافق المختصة - اتصل بنا";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone size={28} className="text-marafiq-600" />,
      title: "اتصل بنا",
      content: "+966 12 345 6789"
    },
    {
      icon: <Mail size={28} className="text-marafiq-600" />,
      title: "البريد الإلكتروني",
      content: "info@marafiq.com"
    },
    {
      icon: <MapPin size={28} className="text-marafiq-600" />,
      title: "العنوان",
      content: "الرياض، المملكة العربية السعودية"
    },
    {
      icon: <Clock size={28} className="text-marafiq-600" />,
      title: "ساعات العمل",
      content: "الأحد - الخميس: 8:00 ص - 5:00 م"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-marafiq-950 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">اتصل بنا</h1>
            <p className="text-xl text-gray-300">
              نحن هنا للإجابة على استفساراتك وتقديم المساعدة
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center animated-card"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="bg-marafiq-900 p-6 lg:p-10">
                <h3 className="text-2xl font-bold text-white mb-6">موقعنا</h3>
                <div className="h-80 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Riyadh,Saudi+Arabia&zoom=12&size=600x400&key=YOUR_API_KEY')] bg-cover bg-center rounded-lg">
                  {/* This would be replaced with an actual map component */}
                </div>
                <div className="mt-6">
                  <h4 className="text-xl font-bold text-white mb-2">المكتب الرئيسي</h4>
                  <p className="text-gray-300">
                    الرياض، المملكة العربية السعودية<br />
                    شارع الملك فهد، برج الأعمال، الطابق 15
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h3>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marafiq-500"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marafiq-500"
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marafiq-500"
                        placeholder="أدخل رقم هاتفك"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">الموضوع</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marafiq-500"
                      >
                        <option value="">اختر الموضوع</option>
                        <option value="استفسار عام">استفسار عام</option>
                        <option value="طلب خدمة">طلب خدمة</option>
                        <option value="عرض سعر">عرض سعر</option>
                        <option value="دعم فني">دعم فني</option>
                        <option value="أخرى">أخرى</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">الرسالة</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-marafiq-500"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    ) : (
                      <Send size={18} className="ml-2" />
                    )}
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title inline-block mx-auto">أسئلة شائعة</h2>
            <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعاً التي قد تخطر على بالك
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-md p-6 animated-card">
                <h3 className="text-xl font-bold mb-3">ما هي مجالات عمل شركة المرافق المختصة؟</h3>
                <p className="text-gray-600">
                  تعمل شركة المرافق المختصة في مجالات الخدمات الهندسية، إدارة المشاريع، الصيانة والتشغيل، والاستشارات الفنية، بالإضافة إلى مجموعة من الخدمات المتخصصة الأخرى في قطاعات المباني والبنية التحتية والطاقة والمياه.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-md p-6 animated-card">
                <h3 className="text-xl font-bold mb-3">كيف يمكنني الحصول على عرض سعر لمشروعي؟</h3>
                <p className="text-gray-600">
                  يمكنك الحصول على عرض سعر لمشروعك من خلال تعبئة نموذج التواصل في هذه الصفحة، أو الاتصال بنا مباشرة على الرقم المذكور. سيقوم فريقنا بالتواصل معك لمناقشة تفاصيل المشروع وتقديم عرض سعر مناسب.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-md p-6 animated-card">
                <h3 className="text-xl font-bold mb-3">هل تقدمون خدماتكم خارج المملكة العربية السعودية؟</h3>
                <p className="text-gray-600">
                  نعم، بالإضافة إلى المملكة العربية السعودية، نقدم خدماتنا في العديد من دول مجلس التعاون الخليجي. يمكنك التواصل معنا لمزيد من المعلومات حول المناطق التي نخدمها.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white rounded-lg shadow-md p-6 animated-card">
                <h3 className="text-xl font-bold mb-3">ما هي مدة تنفيذ المشاريع؟</h3>
                <p className="text-gray-600">
                  تختلف مدة تنفيذ المشاريع حسب حجم وتعقيد المشروع. نقوم بتقديم جدول زمني تفصيلي لكل مشروع بعد دراسة متطلباته، ونلتزم بإنجاز المشاريع في الوقت المحدد وفقاً للخطة المتفق عليها.
                </p>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white rounded-lg shadow-md p-6 animated-card">
                <h3 className="text-xl font-bold mb-3">هل تقدمون خدمات ما بعد التنفيذ والصيانة؟</h3>
                <p className="text-gray-600">
                  نعم، نقدم خدمات ما بعد التنفيذ والصيانة الدورية والطارئة. لدينا فريق متخصص يقوم بالصيانة الوقائية والتصحيحية لضمان استمرارية عمل المرافق بكفاءة عالية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
