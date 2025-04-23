
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, Save } from "lucide-react";

const NewBlogPost = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;
  
  const [loading, setLoading] = useState(false);
  const [imageUploading, setImageUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image_url: ""
  });
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (isEditing) {
      fetchBlogPost();
    }
  }, [id]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        toast.error("فشل في تحميل بيانات المقالة");
        console.error("Error loading blog post:", error);
        navigate("/admin/dashboard/blog");
        return;
      }

      setFormData({
        title: data.title || "",
        content: data.content || "",
        image_url: data.image_url || ""
      });

      if (data.image_url) {
        setPreviewUrl(data.image_url);
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
      const filePath = `blog/${fileName}`;
      
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
      const { data: { user } } = await supabase.auth.getUser();
      let imageUrl = formData.image_url;
      
      if (image) {
        const uploadedUrl = await uploadImage();
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }
      
      if (isEditing) {
        const { error } = await supabase
          .from("blog_posts")
          .update({
            ...formData,
            image_url: imageUrl,
            updated_at: new Date().toISOString()
          })
          .eq("id", id);
          
        if (error) {
          toast.error("فشل في تحديث المقالة");
          console.error("Blog post update error:", error);
          return;
        }
        
        toast.success("تم تحديث المقالة بنجاح");
      } else {
        const { error } = await supabase
          .from("blog_posts")
          .insert({
            ...formData,
            image_url: imageUrl,
            author_id: user?.id,
            published_at: new Date().toISOString()
          });
          
        if (error) {
          toast.error("فشل في إضافة المقالة");
          console.error("Blog post insert error:", error);
          return;
        }
        
        toast.success("تم إضافة المقالة بنجاح");
      }
      
      navigate("/admin/dashboard/blog");
      
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
        <h1 className="text-2xl font-bold">
          {isEditing ? "تعديل المقالة" : "إضافة مقالة جديدة"}
        </h1>
        <Button variant="outline" onClick={() => navigate("/admin/dashboard/blog")}>
          <ArrowLeft size={16} className="ml-2" /> العودة
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>معلومات المقالة</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">عنوان المقالة *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="content">محتوى المقالة *</Label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows={10}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="image">صورة المقالة</Label>
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
                  <Save size={16} className="ml-2" /> {isEditing ? "تحديث المقالة" : "إضافة المقالة"}
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewBlogPost;
