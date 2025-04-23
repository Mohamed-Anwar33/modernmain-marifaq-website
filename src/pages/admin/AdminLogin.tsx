
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "@/components/admin/LoginForm";
import { DebugInfo } from "@/components/admin/DebugInfo";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const AdminLogin = () => {
  const [showDebug, setShowDebug] = useState(false);
  const { isLoading, debugInfo, handleAdminLogin } = useAdminAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg border-gray-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-marafiq-950">
            لوحة تحكم <span className="text-marafiq-600">المرافق المختصة</span>
          </CardTitle>
          <CardDescription className="text-gray-600">
            تسجيل دخول المسؤول
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm 
            onSubmit={handleAdminLogin}
            isLoading={isLoading}
          />
          <DebugInfo
            debugInfo={debugInfo}
            showDebug={showDebug}
            onToggleDebug={() => setShowDebug(!showDebug)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
