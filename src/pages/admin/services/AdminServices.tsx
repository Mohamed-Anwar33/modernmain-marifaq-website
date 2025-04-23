
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LayoutGrid, Plus, Edit, Trash2 } from "lucide-react";

type Service = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image_url?: string;
  created_at: string;
};

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [serviceToDelete, setServiceToDelete] = useState<string | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        toast.error("فشل في تحميل الخدمات");
        console.error("Error loading services:", error);
        return;
      }

      setServices(data || []);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (id: string) => {
    setServiceToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!serviceToDelete) return;

    try {
      const { error } = await supabase
        .from("services")
        .delete()
        .eq("id", serviceToDelete);

      if (error) {
        toast.error("فشل في حذف الخدمة");
        console.error("Delete error:", error);
        return;
      }

      toast.success("تم حذف الخدمة بنجاح");
      setServices((prev) => prev.filter((service) => service.id !== serviceToDelete));
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("حدث خطأ غير متوقع");
    } finally {
      setDeleteDialogOpen(false);
      setServiceToDelete(null);
    }
  };

  const cancelDelete = () => {
    setDeleteDialogOpen(false);
    setServiceToDelete(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">إدارة الخدمات</h1>
        <Link to="/admin/dashboard/services/new">
          <Button className="bg-marafiq-600 text-white hover:bg-marafiq-700">
            <Plus size={16} className="mr-2" /> إضافة خدمة جديدة
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الخدمات</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="w-8 h-8 border-4 border-t-marafiq-600 border-marafiq-200 rounded-full animate-spin"></div>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <LayoutGrid className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-semibold text-gray-900">لا توجد خدمات</h3>
              <p className="mt-1 text-sm text-gray-500">ابدأ بإضافة خدمة جديدة</p>
              <div className="mt-6">
                <Link to="/admin/dashboard/services/new">
                  <Button className="bg-marafiq-600 text-white hover:bg-marafiq-700">
                    <Plus size={16} className="mr-2" /> إضافة خدمة جديدة
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
                    <TableHead>الوصف المختصر</TableHead>
                    <TableHead className="text-left">الإجراءات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service) => (
                    <TableRow key={service.id}>
                      <TableCell className="font-medium">{service.title}</TableCell>
                      <TableCell>
                        {service.description.length > 100
                          ? `${service.description.substring(0, 100)}...`
                          : service.description}
                      </TableCell>
                      <TableCell className="flex gap-2">
                        <Link to={`/admin/dashboard/services/edit/${service.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit size={14} />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteClick(service.id)}
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
            <DialogTitle>حذف الخدمة</DialogTitle>
            <DialogDescription>
              هل أنت متأكد من رغبتك في حذف هذه الخدمة؟ هذا الإجراء لا يمكن التراجع عنه.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="outline" onClick={cancelDelete}>
              إلغاء
            </Button>
            <Button variant="destructive" onClick={confirmDelete}>
              حذف الخدمة
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminServices;
