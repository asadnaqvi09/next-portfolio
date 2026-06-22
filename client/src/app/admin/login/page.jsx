import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
          Admin Login
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          Access your portfolio analytics dashboard
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
