
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Save } from "lucide-react";

type CompanyInfo = {
  id: string;
  name: string;
  about_text: string | null;
  contact_email: string | null;
  contact_phone: string | null;
  address: string | null;
  logo_url: string | null;
  social_media: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  } | null;
};

type SocialMediaLinks = {
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
};

const CompanySettings = () => {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Omit<CompanyInfo, "id">>({
    name: "",
    about_text: "",
    contact_email: "",
    contact_phone: "",
    address: "",
    logo_url: "",
    social_media: {
      facebook: "",
      twitter: "",
      instagram: "",
      linkedin: ""
    }
  });
  const [logo, setLogo] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  const fetchCompanyInfo = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("company_info")
        .select("*")
        .limit(1)
        .single();

      if (error) {
        if (error.code !== "PGRST116") { // No rows returned
          toast.error("فشل في تحميل معلومات الشركة");
          console.error("Error loading company info:", error);
        }
        return;
      }

      setCompanyId(data.id);
      
      // Parse social_media safely
      let socialMedia: SocialMediaLinks = {
        facebook: "",
        twitter: "",
        instagram: "",
        linkedin: ""
      };
      
      // Handle parsing of social_media from JSON
      if (data.social_media) {
        if (typeof data.social_media === 'object' && !Array.isArray(data.social_media)) {
          // Check if it's an object and not an array
          const socialObj = data.social_media as Record<string, any>;
          socialMedia = {
            facebook: socialObj.facebook || "",
            twitter: socialObj.twitter || "",
            instagram: socialObj.instagram || "",
            linkedin: socialObj.linkedin || ""
          };
        } else {
          // If for some reason it's a string or array, try to handle it safely
          try {
            if (typeof data.social_media === 'string') {
              const parsed = JSON.parse(data.social_media);
              if (typeof parsed === 'object' && !Array.isArray(parsed)) {
                socialMedia = {
                  facebook: parsed.facebook || "",
                  twitter: parsed.twitter || "",
                  instagram: parsed.instagram || "",
                  linkedin: parsed.linkedin || ""
                };
              }
            }
          } catch (e) {
            console.error("Error parsing social_media:", e);
          }
        }
      }
      
      setFormData({
        name: data.name || "",
        about_text: data.about_text || "",
        contact_email: data.contact_email || "",
        contact_phone: data.contact_phone || "",
        address: data.address || "",
        logo_url: data.logo_url || "",
        social_media: socialMedia
      });

      if (data.logo_url) {
        setPreviewUrl(data.logo_url);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith("social_media.")) {
      const socialField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        social_media: {
          ...prev.social_media,
          [socialField]: value
        }
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLogo(file);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const uploadLogo = async (): Promise<string | null> => {
    if (!logo) return null;
    
    setImageUploading(true);
    
    try {
      const fileExt = logo.name.split('.').pop();
      const fileName = `company/logo_${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('marafiq_images')
        .upload(fileName, logo);
        
      if (uploadError) {
        toast.error("فشل في رفع الشعار");
        console.error("Logo upload error:", uploadError);
        return null;
      }
      
      const { data } = supabase.storage.from('marafiq_images').getPublicUrl(fileName);
      return data.publicUrl;
      
    } catch (error) {
      console.error("Unexpected upload error:", error);
      toast.error("حدث خطأ أثناء رفع الشعار");
      return null;
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      let logoUrl = formData.logo_url;
      
      if (logo) {
        const uploadedUrl = await uploadLogo();
        if (uploadedUrl) {
          logoUrl = uploadedUrl;
        }
      }
      
      if (companyId) {
        // Update existing company info
        const { error } = await supabase
          .from("company_info")
          .update({
            ...formData,
            logo_url: logoUrl,
            updated_at: new Date().toISOString()
          })
          .eq("id", companyId);
          
        if (error) {
          toast.error("فشل في تحديث معلومات الشركة");
          console.error("Company info update error:", error);
          return;
        }
        
        toast.success("تم تحديث معلومات الشركة بنجاح");
      } else {
        // Insert new company info
        const { data, error } = await supabase
          .from("company_info")
          .insert({
            ...formData,
            logo_url: logoUrl
          })
          .select();
          
        if (error) {
          toast.error("فشل في حفظ معلومات الشركة");
          console.error("Company info insert error:", error);
          return;
        }
        
        if (data && data[0]) {
          setCompanyId(data[0].id);
        }
        
        toast.success("تم حفظ معلومات الشركة بنجاح");
      }
      
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">بيانات الشركة</h1>

      <Card>
        <CardHeader>
          <CardTitle>المعلومات الأساسية</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-t-marafiq-600 border-marafiq-200 rounded-full animate-spin"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">اسم الشركة *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="about_text">نبذة عن الشركة</Label>
                  <Textarea
                    id="about_text"
                    name="about_text"
                    value={formData.about_text || ""}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact_email">البريد الإلكتروني للتواصل</Label>
                  <Input
                    id="contact_email"
                    name="contact_email"
                    type="email"
                    value={formData.contact_email || ""}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="contact_phone">رقم الهاتف للتواصل</Label>
                  <Input
                    id="contact_phone"
                    name="contact_phone"
                    value={formData.contact_phone || ""}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="address">العنوان</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address || ""}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="logo">شعار الشركة</Label>
                  <div className="mt-1 flex items-center">
                    <label className="block w-full">
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <span>اسحب وأفلت الشعار هنا أو انقر للاختيار</span>
                            <Input
                              id="logo"
                              name="logo"
                              type="file"
                              accept="image/*"
                              onChange={handleLogoChange}
                              className="sr-only"
                            />
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                  
                  {previewUrl && (
                    <div className="mt-4">
                      <img
                        src={previewUrl}
                        alt="معاينة الشعار"
                        className="h-32 w-auto object-contain"
                      />
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium">وسائل التواصل الاجتماعي</h3>
                  
                  <div className="mt-4 space-y-4">
                    <div>
                      <Label htmlFor="social_media.facebook">فيسبوك</Label>
                      <Input
                        id="social_media.facebook"
                        name="social_media.facebook"
                        value={formData.social_media?.facebook || ""}
                        onChange={handleChange}
                        placeholder="https://facebook.com/..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="social_media.twitter">تويتر</Label>
                      <Input
                        id="social_media.twitter"
                        name="social_media.twitter"
                        value={formData.social_media?.twitter || ""}
                        onChange={handleChange}
                        placeholder="https://twitter.com/..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="social_media.instagram">انستغرام</Label>
                      <Input
                        id="social_media.instagram"
                        name="social_media.instagram"
                        value={formData.social_media?.instagram || ""}
                        onChange={handleChange}
                        placeholder="https://instagram.com/..."
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="social_media.linkedin">لينكد إن</Label>
                      <Input
                        id="social_media.linkedin"
                        name="social_media.linkedin"
                        value={formData.social_media?.linkedin || ""}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/company/..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="bg-marafiq-600 text-white hover:bg-marafiq-700 w-full"
                disabled={saving || imageUploading}
              >
                {saving || imageUploading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                    {imageUploading ? "جاري رفع الشعار..." : "جاري الحفظ..."}
                  </>
                ) : (
                  <>
                    <Save size={16} className="ml-2" /> حفظ معلومات الشركة
                  </>
                )}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompanySettings;
