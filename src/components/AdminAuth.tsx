
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";

const AdminAuth = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setIsLoading(true);
        console.log("Checking authentication status");
        
        // Get current session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error("Session error:", sessionError);
          setError("خطأ في جلب بيانات المستخدم");
          navigate('/admin/login');
          return;
        }
        
        if (!session) {
          console.log("No session found, redirecting to login");
          toast.error("يرجى تسجيل الدخول أولاً");
          navigate('/admin/login');
          return;
        }
        
        console.log("Session found, checking admin role");
        
        // Check if user exists and has admin role
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        
        console.log("Profile check result:", { profile, profileError });
        
        if (profileError) {
          console.error("Profile error:", profileError);
          setError("خطأ في التحقق من صلاحيات المستخدم");
          await supabase.auth.signOut();
          navigate('/admin/login');
          return;
        }
        
        if (!profile || profile.role !== 'admin') {
          console.log("User is not an admin, signing out");
          toast.error("ليس لديك صلاحية للوصول إلى لوحة التحكم");
          await supabase.auth.signOut();
          navigate('/admin/login');
          return;
        }
        
        console.log("Authentication successful, user is admin");
      } catch (error) {
        console.error("Authentication error:", error);
        setError("حدث خطأ في التحقق من الصلاحيات");
        navigate('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event);
      if (event === 'SIGNED_OUT') {
        navigate('/admin/login');
      } else if (event === 'SIGNED_IN' && session) {
        // We don't need to do anything here as checkAuth will handle it
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-marafiq-600 border-marafiq-300 rounded-full animate-spin"></div>
          <p className="mt-4 text-marafiq-800">جاري التحقق من الصلاحيات...</p>
          {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminAuth;
