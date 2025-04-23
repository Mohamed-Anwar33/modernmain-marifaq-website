
import { Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "الصفحة غير موجودة - المرافق المختصة";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center max-w-lg">
        <h1 className="text-9xl font-bold text-marafiq-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mb-8">
          نأسف، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
        </p>
        <Link to="/" className="btn-primary inline-flex">
          العودة للصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
