
import { useEffect, useState } from "react";
import { useNavigate, Routes, Route, Link, useLocation } from "react-router-dom";
import { Home, LayoutGrid, FileText, Briefcase, Settings, LogOut, Menu, X, Building } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import AdminHome from "./AdminHome";
import AdminProjects from "./projects/AdminProjects";
import NewProject from "./projects/NewProject";
import AdminBlog from "./blog/AdminBlog";
import NewBlogPost from "./blog/NewBlogPost";
import AdminServices from "./services/AdminServices";
import NewService from "./services/NewService";
import CompanySettings from "./settings/CompanySettings";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [userName, setUserName] = useState("المدير");
  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          // Try to get user profile
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('email')
            .eq('id', user.id)
            .single();
            
          if (profile) {
            // Extract name from email (before @)
            const nameFromEmail = profile.email.split('@')[0];
            setUserName(nameFromEmail || "المدير");
          }
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    
    fetchUserProfile();
    document.title = "لوحة التحكم - المرافق المختصة";
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("حدث خطأ أثناء تسجيل الخروج");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === `/admin/dashboard${path}` ||
           location.pathname.startsWith(`/admin/dashboard${path}/`);
  };

  const navItems = [
    { icon: <Home size={20} />, label: "الرئيسية", path: "" },
    { icon: <LayoutGrid size={20} />, label: "الخدمات", path: "/services" },
    { icon: <Briefcase size={20} />, label: "المشاريع", path: "/projects" },
    { icon: <FileText size={20} />, label: "المقالات", path: "/blog" },
    { icon: <Building size={20} />, label: "بيانات الشركة", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar for desktop */}
      <aside className={`bg-marafiq-950 text-white w-64 flex-shrink-0 fixed inset-y-0 z-50 transition-transform duration-300 lg:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      }`}>
        <div className="p-4 border-b border-marafiq-800">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">لوحة التحكم</h1>
            <button 
              className="lg:hidden text-white p-2" 
              onClick={toggleSidebar}
              aria-label="Close sidebar"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <nav className="mt-6">
          <ul className="space-y-2 px-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={`/admin/dashboard${item.path}`}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-marafiq-800 text-white"
                      : "text-gray-300 hover:bg-marafiq-900 hover:text-white"
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <span className="ml-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-gray-300 hover:bg-marafiq-800 hover:text-white rounded-md transition-colors"
            >
              <LogOut size={20} className="ml-3" />
              <span>تسجيل الخروج</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:mr-64">
        {/* Top Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <button 
            className="lg:hidden text-gray-700 p-2" 
            onClick={toggleSidebar}
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          <h2 className="text-xl font-bold text-marafiq-950">
            المرافق <span className="text-marafiq-600">المختصة</span>
          </h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 ml-2">مرحباً، {userName}</span>
            <div className="w-8 h-8 rounded-full bg-marafiq-600 text-white flex items-center justify-center">
              {userName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          <Routes>
            <Route index element={<AdminHome />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="projects/new" element={<NewProject />} />
            <Route path="projects/edit/:id" element={<NewProject />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="services/new" element={<NewService />} />
            <Route path="services/edit/:id" element={<NewService />} />
            <Route path="blog" element={<AdminBlog />} />
            <Route path="blog/new" element={<NewBlogPost />} />
            <Route path="blog/edit/:id" element={<NewBlogPost />} />
            <Route path="settings" element={<CompanySettings />} />
            <Route path="*" element={<div className="p-6">صفحة غير موجودة</div>} />
          </Routes>
        </main>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
