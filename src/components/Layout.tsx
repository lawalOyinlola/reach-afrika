import { Navbar } from "@/components/NavBar";
import { AppFooter } from "@/components/AppFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}
