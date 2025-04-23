
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, Plus, Edit, Trash2 } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  client?: string;
  completion_date?: string;
  image_url?: string;
  created_at: string;
};

const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("فشل في تحميل المشاريع");
        console.error("Error loading projects:", error);
        return;
      }

      setProjects(data || []);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setProjectToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!projectToDelete) return;

    try {
      const { error } = await supabase
        .from("projects")
        .delete()
        .eq("id", projectToDelete);

      if (error) {
        toast.error("فشل في حذف المشروع");
        console.error("Delete error:", error);
        return;
      }

      toast.success("تم حذف المشروع بنجاح");
      setProjects((prev) => prev.filter((project) => project.id !== projectToDelete));
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setDeleteDialogOpen(false);
      setProjectToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setProjectToDelete(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">إدارة المشاريع</h1>
        <Link to="/admin/dashboard/projects/new">
          <Button className="bg-marafiq-600 text-white hover:bg-marafiq-700">
            <Plus size={16} className="mr-2" /> إضافة مشروع جديد
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة المشاريع</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-t-marafiq-600 border-marafiq-200 rounded-full animate-spin"></div>
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">لا توجد مشاريع</h3>
              <p className="mt-1 text-sm text-gray-500">ابدأ بإضافة مشروع جديد</p>
              <div className="mt-6">
                <Link to="/admin/dashboard/projects/new">
                  <Button className="bg-marafiq-600 text-white hover:bg-marafiq-700">
                    <Plus size={16} className="mr-2" /> إضافة مشروع جديد
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
                    <TableHead>التصنيف</TableHead>
                    <TableHead>العميل</TableHead>
                    <TableHead>تاريخ الإنجاز</TableHead>
                    <TableHead className="text-left">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.title}</TableCell>
                      <TableCell>{project.category}</TableCell>
                      <TableCell>{project.client || "-"}</TableCell>
                      <TableCell>{project.completion_date || "-"}</TableCell>
                      <TableCell className="flex gap-2">
                        <Link to={`/admin/dashboard/projects/edit/${project.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit size={14} />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteClick(project.id)}
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
            <DialogTitle>حذف المشروع</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في حذف هذا المشروع؟ هذا الإجراء لا يمكن التراجع عنه.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="outline" onClick={cancelDelete}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              حذف المشروع
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProjects;
