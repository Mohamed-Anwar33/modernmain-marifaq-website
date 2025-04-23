
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const useAdminAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setDebugInfo("");

    try {
      console.log("Attempting to sign in with:", { email });
      
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        console.error("Sign in error:", signInError);
        
        if (signInError.message.includes("Invalid login credentials")) {
          console.log("Attempting to create new admin user");
          
          const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
            email,
            password,
            options: {
              data: {
                role: 'admin'
              }
            }
          });

          if (signUpError) {
            toast.error("فشل في تسجيل الدخول وإنشاء حساب جديد");
            console.error("Sign up error:", signUpError);
            setDebugInfo(JSON.stringify(signUpError, null, 2));
            return;
          }

          if (signUpData.user) {
            console.log("Creating admin profile for new user:", signUpData.user.id);
            
            const { error: profileError } = await supabase
              .from('profiles')
              .insert({
                id: signUpData.user.id,
                email: email,
                role: 'admin'
              });

            if (profileError) {
              toast.error("فشل في إنشاء ملف المستخدم");
              console.error("Profile creation error:", profileError);
              setDebugInfo(JSON.stringify(profileError, null, 2));
              return;
            }

            toast.success("تم إنشاء حساب المسؤول بنجاح وتسجيل الدخول!");
            navigate("/admin/dashboard");
          }
        } else {
          toast.error(`فشل تسجيل الدخول: ${signInError.message}`);
          setDebugInfo(JSON.stringify(signInError, null, 2));
        }
        return;
      }

      if (signInData && signInData.user) {
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', signInData.user.id)
          .single();

        console.log("Profile check result:", { profile, profileError });

        if (profileError) {
          if (profileError.code === 'PGRST116') {
            console.log("Profile doesn't exist, creating new admin profile");
            
            const { error: insertError } = await supabase
              .from('profiles')
              .insert({
                id: signInData.user.id,
                email: email,
                role: 'admin'
              });

            if (insertError) {
              toast.error("فشل في إنشاء ملف المستخدم");
              console.error("Profile creation error:", insertError);
              setDebugInfo(JSON.stringify(insertError, null, 2));
              return;
            } else {
              toast.success("تم تسجيل الدخول وإنشاء ملف المستخدم بنجاح!");
              navigate("/admin/dashboard");
            }
          } else {
            toast.error("فشل في التحقق من صلاحيات المستخدم");
            console.error("Profile error:", profileError);
            setDebugInfo(JSON.stringify(profileError, null, 2));
            return;
          }
        } else if (!profile || profile.role !== 'admin') {
          toast.error("ليس لديك صلاحية للوصول إلى لوحة التحكم");
          await supabase.auth.signOut();
          setDebugInfo(JSON.stringify({ error: "Not an admin", profile }, null, 2));
          return;
        } else {
          toast.success("تم تسجيل الدخول بنجاح!");
          navigate("/admin/dashboard");
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
      setDebugInfo(JSON.stringify(error, null, 2));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    debugInfo,
    handleAdminLogin,
    setDebugInfo
  };
};
