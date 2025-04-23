
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactFormSection = () => {
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
      icon: <Phone size={24} className="text-marafiq-600" />,
      title: "اتصل بنا",
      content: "+966 12 345 6789"
    },
    {
      icon: <Mail size={24} className="text-marafiq-600" />,
      title: "البريد الإلكتروني",
      content: "info@marafiq.com"
    },
    {
      icon: <MapPin size={24} className="text-marafiq-600" />,
      title: "العنوان",
      content: "الرياض، المملكة العربية السعودية"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto">تواصل معنا</h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            نحن هنا للإجابة على استفساراتك وتقديم المساعدة. لا تتردد في التواصل معنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md text-center animated-card"
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map */}
            <div className="bg-marafiq-900 p-8 lg:p-12 flex items-center justify-center">
              <div className="w-full h-full min-h-[300px] bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Riyadh,Saudi+Arabia&zoom=12&size=600x400&key=YOUR_API_KEY')] bg-cover bg-center rounded-lg">
                {/* Replace with actual map component */}
              </div>
            </div>

            {/* Form */}
            <div className="p-8 lg:p-12">
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
  );
};

export default ContactFormSection;
