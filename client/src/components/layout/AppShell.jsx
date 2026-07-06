import TopNavbar from "@/components/layout/TopNavbar";
import ShellMain from "@/components/layout/ShellMain";

export default function AppShell({ children }) {
  return (
    <>
      <TopNavbar />
      <ShellMain>{children}</ShellMain>
    </>
  );
}
