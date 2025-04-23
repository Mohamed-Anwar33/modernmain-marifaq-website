
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Save } from "lucide-react";

const NewProject = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    client: "",
    completion_date: "",
    image_url: ""
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!image) return null;
    
    setImageUploading(true);
    
    try {
      const fileExt = image.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `projects/${fileName}`;
      
      const { error: uploadError } = await supabase.storage
        .from('marafiq_images')
        .upload(filePath, image);
        
      if (uploadError) {
        toast.error("فشل في رفع الصورة");
        console.error("Image upload error:", uploadError);
        return null;
      }
      
      const { data } = supabase.storage.from('marafiq_images').getPublicUrl(filePath);
      return data.publicUrl;
      
    } catch (error) {
      console.error("Unexpected upload error:", error);
      toast.error("حدث خطأ أثناء رفع الصورة");
      return null;
    } finally {
      setImageUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      let imageUrl = formData.image_url;
      
      if (image) {
        const uploadedUrl = await uploadImage();
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }
      
      const { error } = await supabase.from("projects").insert({
        ...formData,
        image_url: imageUrl
      });
      
      if (error) {
        toast.error("فشل في إضافة المشروع");
        console.error("Project insert error:", error);
        return;
      }
      
      toast.success("تم إضافة المشروع بنجاح");
      navigate("/admin/dashboard/projects");
      
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">إضافة مشروع جديد</h1>
        <Button variant="outline" onClick={() => navigate("/admin/dashboard/projects")}>
          <ArrowLeft size={16} className="ml-2" /> العودة
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>معلومات المشروع</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">عنوان المشروع *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="category">تصنيف المشروع *</Label>
                <Input
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="client">العميل</Label>
                <Input
                  id="client"
                  name="client"
                  value={formData.client}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="completion_date">تاريخ الإنجاز</Label>
                <Input
                  id="completion_date"
                  name="completion_date"
                  type="date"
                  value={formData.completion_date}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="description">وصف المشروع *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="image">صورة المشروع</Label>
                <div className="mt-1 flex items-center">
                  <label className="block w-full">
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:bg-gray-50">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <span>اسحب وأفلت الصورة هنا أو انقر للاختيار</span>
                          <Input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
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
                      alt="معاينة الصورة"
                      className="h-48 w-auto object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="bg-marafiq-600 text-white hover:bg-marafiq-700 w-full"
              disabled={loading || imageUploading}
            >
              {loading || imageUploading ? (
                <>
                  <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
                  {imageUploading ? "جاري رفع الصورة..." : "جاري الحفظ..."}
                </>
              ) : (
                <>
                  <Save size={16} className="ml-2" /> حفظ المشروع
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewProject;
