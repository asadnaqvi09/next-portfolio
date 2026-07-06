import LoginForm from "@/components/admin/LoginForm";
import Eyebrow from "@/components/ui/Eyebrow";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-8 py-16">
      <div className="mb-8 text-center">
        <Eyebrow className="mb-6">Admin</Eyebrow>
        <h1 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold text-[var(--color-text-primary)]">
          Admin Login
        </h1>
        <p className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-sm text-[var(--color-text-secondary)]">
          Access your portfolio analytics dashboard
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
