"use client";
import { Button } from "@/components/ui/button";
import AvatarIcon from "./avatar-icon";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import { LogOut } from "lucide-react";

export default function NavBar() {
  const { logout } = useAuth();
  const pathname = usePathname();
  const [pageTitle, setPageTitle] = useState("Write");

  useEffect(() => {
    if (pathname === "/feed") {
      setPageTitle("Write");
    } else if (pathname === "/write") {
      setPageTitle("Read");
    }
  }, [pathname]);

  return (
    <nav className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-8">
          <Link href="/">
            <h1 className="text-xl font-serif">Median</h1>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href={pageTitle === "Write" ? "/write" : "/feed"}>
            <Button>{pageTitle}</Button>
          </Link>
          <AvatarIcon />
          <button
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
            onClick={logout}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
