
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Plus, Edit, Trash2 } from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  content: string;
  image_url?: string;
  published_at?: string;
  created_at: string;
};

const AdminBlog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("فشل في تحميل المقالات");
        console.error("Error loading posts:", error);
        return;
      }

      setPosts(data || []);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setPostToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;

    try {
      const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", postToDelete);

      if (error) {
        toast.error("فشل في حذف المقالة");
        console.error("Delete error:", error);
        return;
      }

      toast.success("تم حذف المقالة بنجاح");
      setPosts((prev) => prev.filter((post) => post.id !== postToDelete));
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setDeleteDialogOpen(false);
      setPostToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setPostToDelete(null);
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString("ar-SA");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">إدارة المقالات</h1>
        <Link to="/admin/dashboard/blog/new">
          <Button className="bg-marafiq-600 text-white hover:bg-marafiq-700">
            <Plus size={16} className="mr-2" /> إضافة مقالة جديدة
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة المقالات</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-t-marafiq-600 border-marafiq-200 rounded-full animate-spin"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">لا توجد مقالات</h3>
              <p className="mt-1 text-sm text-gray-500">ابدأ بإضافة مقالة جديدة</p>
              <div className="mt-6">
                <Link to="/admin/dashboard/blog/new">
                  <Button className="bg-marafiq-600 text-white hover:bg-marafiq-700">
                    <Plus size={16} className="mr-2" /> إضافة مقالة جديدة
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>العنوان</TableHead>
                    <TableHead>تاريخ النشر</TableHead>
                    <TableHead>تاريخ الإنشاء</TableHead>
                    <TableHead className="text-left">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {posts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{formatDate(post.published_at)}</TableCell>
                      <TableCell>{formatDate(post.created_at)}</TableCell>
                      <TableCell className="flex gap-2">
                        <Link to={`/admin/dashboard/blog/edit/${post.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit size={14} />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteClick(post.id)}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>حذف المقالة</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في حذف هذه المقالة؟ هذا الإجراء لا يمكن التراجع عنه.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="outline" onClick={cancelDelete}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              حذف المقالة
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminBlog;
