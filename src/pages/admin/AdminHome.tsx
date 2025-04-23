
import { useEffect, useState } from "react";
import { BarChart, Users, FileText, Briefcase, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const AdminHome = () => {
  const [stats, setStats] = useState({
    projects: 0,
    articles: 0,
    services: 0,
    companyInfo: false
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Get projects count
        const { count: projectsCount, error: projectsError } = await supabase
          .from('projects')
          .select('*', { count: 'exact', head: true });
        
        // Get articles count
        const { count: articlesCount, error: articlesError } = await supabase
          .from('blog_posts')
          .select('*', { count: 'exact', head: true });
          
        // Get services count
        const { count: servicesCount, error: servicesError } = await supabase
          .from('services')
          .select('*', { count: 'exact', head: true });
          
        // Check if company info exists
        const { data: companyData, error: companyError } = await supabase
          .from('company_info')
          .select('id')
          .limit(1);
          
        if (!projectsError && !articlesError && !servicesError && !companyError) {
          setStats({
            projects: projectsCount || 0,
            articles: articlesCount || 0,
            services: servicesCount || 0,
            companyInfo: companyData && companyData.length > 0
          });
        } else {
          console.error("Error fetching stats:", { projectsError, articlesError, servicesError, companyError });
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statsCards = [
    { 
      title: "المشاريع", 
      value: loading ? "..." : stats.projects.toString(), 
      icon: <Briefcase size={24} className="text-orange-500" />,
      link: "/admin/dashboard/projects"
    },
    { 
      title: "المقالات", 
      value: loading ? "..." : stats.articles.toString(), 
      icon: <FileText size={24} className="text-green-500" />,
      link: "/admin/dashboard/blog"
    },
    { 
      title: "الخدمات", 
      value: loading ? "..." : stats.services.toString(), 
      icon: <Users size={24} className="text-blue-500" />,
      link: "/admin/dashboard/services"
    },
    { 
      title: "معلومات الشركة", 
      value: loading ? "..." : stats.companyInfo ? "متوفرة" : "غير متوفرة", 
      icon: <Building size={24} className="text-purple-500" />,
      link: "/admin/dashboard/settings"
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">لوحة التحكم</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-semibold">{stat.title}</CardTitle>
                <div className="p-2 rounded-lg bg-gray-100">{stat.icon}</div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{stat.value}</p>
            </CardContent>
            <CardFooter>
              <Link to={stat.link} className="w-full">
                <Button variant="outline" className="w-full">
                  إدارة {stat.title}
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">إجراءات سريعة</CardTitle>
          <CardDescription>استخدم هذه الأزرار للوصول السريع للوظائف الأكثر استخداماً</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/admin/dashboard/projects/new">
              <Button className="w-full bg-marafiq-600 text-white hover:bg-marafiq-700">
                إضافة مشروع جديد
              </Button>
            </Link>
            <Link to="/admin/dashboard/blog/new">
              <Button className="w-full bg-marafiq-600 text-white hover:bg-marafiq-700">
                إضافة مقال جديد
              </Button>
            </Link>
            <Link to="/admin/dashboard/settings">
              <Button className="w-full bg-marafiq-600 text-white hover:bg-marafiq-700">
                تحديث بيانات الشركة
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminHome;
