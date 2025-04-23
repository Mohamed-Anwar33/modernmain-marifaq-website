
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
  const [email, setEmail] = useState("mohamed@gmail.com");
  const [password, setPassword] = useState("mohamed162005");
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email.trim(), password);
  };

  const markAsTouched = (field: string) => {
    setTouchedFields({ ...touchedFields, [field]: true });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">البريد الإلكتروني</Label>
        <Input 
          id="email" 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => markAsTouched("email")}
          placeholder="أدخل البريد الإلكتروني"
          required
          aria-required="true"
          aria-invalid={touchedFields.email && !email ? "true" : "false"}
          className="transition-all focus:border-marafiq-600 focus:ring-marafiq-600"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">كلمة المرور</Label>
        <Input 
          id="password" 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => markAsTouched("password")}
          placeholder="أدخل كلمة المرور"
          required
          aria-required="true"
          aria-invalid={touchedFields.password && !password ? "true" : "false"}
          className="transition-all focus:border-marafiq-600 focus:ring-marafiq-600"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-marafiq-600 text-white py-3 rounded-md font-medium hover:bg-marafiq-700 transition-colors disabled:bg-marafiq-400"
        disabled={isLoading}
        aria-busy={isLoading ? "true" : "false"}
      >
        {isLoading ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></span>
            جاري تسجيل الدخول...
          </>
        ) : (
          "تسجيل الدخول"
        )}
      </Button>
    </form>
  );
};
