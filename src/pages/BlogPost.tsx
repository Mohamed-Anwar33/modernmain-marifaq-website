
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, Clock, ChevronRight, ArrowLeft, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `المرافق المختصة - المقالة`;
  }, [id]);

  // This would come from a database in a real application
  const post = {
    title: "أحدث التقنيات في مجال الهندسة المدنية",
    content: `
      <p>تشهد الهندسة المدنية تطوراً مستمراً مع ظهور تقنيات جديدة تساهم في تحسين كفاءة وجودة المشاريع الإنشائية. في هذه المقالة، نستعرض بعض أحدث التقنيات المستخدمة في مجال الهندسة المدنية وتأثيرها على تطوير المشاريع.</p>
      
      <h2>نمذجة معلومات البناء (BIM)</h2>
      <p>تعتبر تقنية نمذجة معلومات البناء (Building Information Modeling - BIM) من أبرز التقنيات الحديثة في مجال الهندسة المدنية. توفر هذه التقنية نماذج رقمية ثلاثية الأبعاد للمباني والبنية التحتية، مما يتيح للمهندسين والمعماريين والمقاولين التعاون بشكل أفضل والتخطيط للمشروع بدقة أكبر.</p>
      
      <p>تسمح تقنية BIM بتحديد المشكلات المحتملة قبل بدء البناء، مما يوفر الوقت والمال ويقلل من التغييرات أثناء التنفيذ. كما تساعد في تحسين إدارة المشاريع من خلال توفير معلومات دقيقة عن مواد البناء والتكاليف والجداول الزمنية.</p>
      
      <h2>الطباعة ثلاثية الأبعاد في البناء</h2>
      <p>أحدثت الطباعة ثلاثية الأبعاد ثورة في مجال الإنشاءات، حيث يمكن استخدامها لبناء هياكل كاملة في وقت قياسي وبتكلفة أقل. تعتمد هذه التقنية على استخدام روبوتات خاصة لوضع طبقات من المواد (غالباً الخرسانة) بناءً على نموذج رقمي.</p>
      
      <p>من مزايا الطباعة ثلاثية الأبعاد في البناء:</p>
      <ul>
        <li>تقليل وقت البناء بنسبة تصل إلى 70%</li>
        <li>خفض تكاليف العمالة والمواد</li>
        <li>تقليل النفايات الإنشائية</li>
        <li>إمكانية تنفيذ تصاميم معقدة يصعب تحقيقها بالطرق التقليدية</li>
      </ul>
      
      <h2>المواد الذكية والمستدامة</h2>
      <p>تشهد صناعة البناء اهتماماً متزايداً بالمواد الذكية والمستدامة التي توفر أداءً أفضل وتقلل من الأثر البيئي. من أمثلة هذه المواد:</p>
      
      <ul>
        <li>الخرسانة ذاتية الإصلاح: تحتوي على كبسولات دقيقة من مواد لاصقة تنكسر عند حدوث شروخ وتملأ الفجوات تلقائياً.</li>
        <li>الزجاج الذكي: يمكنه تغيير شفافيته استجابةً لدرجات الحرارة أو الإضاءة، مما يوفر في استهلاك الطاقة.</li>
        <li>المواد المتجددة: كالخشب المهندس والمواد المعاد تدويرها التي تقلل من البصمة الكربونية للمباني.</li>
      </ul>
      
      <h2>أنظمة المراقبة والاستشعار</h2>
      <p>تستخدم أنظمة المراقبة والاستشعار المتقدمة لرصد حالة المباني والبنية التحتية بشكل مستمر. توفر هذه الأنظمة بيانات في الوقت الفعلي عن أداء الهياكل وتحذر من المشكلات المحتملة قبل تفاقمها.</p>
      
      <p>تشمل تطبيقات هذه التقنية:</p>
      <ul>
        <li>مراقبة سلامة الجسور والأنفاق</li>
        <li>قياس كفاءة استهلاك الطاقة في المباني</li>
        <li>التنبؤ بالصيانة الدورية اللازمة</li>
        <li>تحسين إدارة الموارد في المشاريع الإنشائية</li>
      </ul>
      
      <h2>الواقع الافتراضي والمعزز</h2>
      <p>يستخدم المهندسون تقنيات الواقع الافتراضي (VR) والواقع المعزز (AR) لتحسين عمليات التصميم والتنفيذ. تتيح هذه التقنيات للمهندسين والعملاء تجربة المشاريع بشكل تفاعلي قبل بدء التنفيذ، مما يساعد في اتخاذ قرارات أفضل وتجنب التغييرات المكلفة لاحقاً.</p>
      
      <p>كما تستخدم هذه التقنيات في تدريب العاملين على استخدام المعدات وتنفيذ الإجراءات المعقدة بطريقة آمنة وفعالة.</p>
      
      <h2>الخلاصة</h2>
      <p>تمثل التقنيات الحديثة في مجال الهندسة المدنية فرصة كبيرة لتحسين كفاءة وجودة المشاريع الإنشائية. بتبني هذه التقنيات، يمكن للشركات الهندسية تقديم مشاريع أكثر استدامة وفعالية من حيث التكلفة، مع تقليل المخاطر وتحسين السلامة.</p>
      
      <p>في شركة المرافق المختصة، نحرص على مواكبة أحدث التقنيات في مجال الهندسة لتقديم خدمات متميزة لعملائنا وتنفيذ مشاريع تلبي أعلى المعايير العالمية.</p>
    `,
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    author: "م. أحمد الشمري",
    date: "15 مارس 2023",
    readTime: "5 دقائق",
    category: "هندسة"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "كيفية اختيار المقاول المناسب لمشروعك",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122",
      date: "28 فبراير 2023",
      slug: "how-to-choose-the-right-contractor"
    },
    {
      id: 3,
      title: "الاستدامة في المشاريع الهندسية الحديثة",
      image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd",
      date: "10 يناير 2023",
      slug: "sustainability-in-engineering-projects"
    },
    {
      id: 9,
      title: "الابتكارات الحديثة في هندسة الجسور",
      image: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff",
      date: "3 مارس 2023",
      slug: "modern-innovations-bridge-engineering"
    }
  ];

  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-marafiq-600">الرئيسية</Link>
            <ChevronRight className="mx-2" size={16} />
            <Link to="/blog" className="text-gray-600 hover:text-marafiq-600">المدونة</Link>
            <ChevronRight className="mx-2" size={16} />
            <span className="text-marafiq-600">المقالة</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                {/* Featured Image */}
                <div className="h-80">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Article Header */}
                <div className="p-8">
                  <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
                  
                  <div className="flex flex-wrap items-center text-gray-500 text-sm mb-8 gap-4">
                    <div className="flex items-center">
                      <Calendar size={14} className="ml-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="ml-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="ml-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <span className="inline-block bg-marafiq-100 text-marafiq-700 px-3 py-1 rounded-full text-xs">
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Article Content */}
                  <div 
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  {/* Share Links */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-bold mb-4">شارك المقالة</h3>
                    <div className="flex gap-3">
                      <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="bg-sky-500 text-white p-2 rounded-full hover:bg-sky-600 transition-colors">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="bg-blue-800 text-white p-2 rounded-full hover:bg-blue-900 transition-colors">
                        <Linkedin size={20} />
                      </a>
                      <a href="#" className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors">
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Bio */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">عن الكاتب</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="م. أحمد الشمري" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="mr-4">
                    <h4 className="font-bold text-lg">{post.author}</h4>
                    <p className="text-gray-600">مهندس مدني أول</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  مهندس مدني متخصص في تطوير وتطبيق التقنيات الحديثة في المشاريع الإنشائية، مع خبرة تزيد عن 10 سنوات في مختلف المشاريع الهندسية.
                </p>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">مقالات ذات صلة</h3>
                <div className="space-y-4">
                  {relatedPosts.map((post) => (
                    <Link key={post.id} to={`/blog/${post.slug}`} className="flex items-start group">
                      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="mr-3">
                        <h4 className="font-medium leading-tight group-hover:text-marafiq-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-gray-500 text-sm mt-1">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-6">
                  <Link 
                    to="/blog"
                    className="inline-flex items-center text-marafiq-600 font-medium hover:text-marafiq-700 transition-colors"
                  >
                    <span>عرض جميع المقالات</span>
                    <ArrowLeft size={16} className="mr-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
