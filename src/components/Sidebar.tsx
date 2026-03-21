"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, FolderKanban, Receipt, Users, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban }, // Assuming /projects page exists or will exist
  { name: "Invoices", href: "/invoices", icon: Receipt },
  { name: "Clients", href: "/clients", icon: Users },
];

const adminItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  // Admin specific routes if any
];

export function Sidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const items = isAdmin ? adminItems : sidebarItems;

  const handleLogout = async () => {
    await signOut(auth);
    // Also clear session cookie
    await fetch("/api/auth/logout", { method: "POST" }); // We need to implement this
    router.push("/login");
  };

  return (
    <div className="w-64 border-r border-border h-screen bg-card/50 hidden md:flex flex-col">
      <div className="p-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-primary flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs">SUP</div>
          <span className="text-foreground">SAASITUP</span>
        </Link>
      </div>

      <div className="flex-1 py-4 px-3 space-y-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start gap-3 mb-1",
                pathname === item.href ? "bg-accent/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Button>
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive" onClick={handleLogout}>
          <LogOut className="w-5 h-5" />
          Sign Out
        </Button>
      </div>
    </div>
  );
}
