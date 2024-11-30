"use client";
import { Button } from "@/components/ui/button";
import AvatarIcon from "./avatar-icon";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
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
          <h1 className="text-xl font-serif">Median</h1>
        </div>
        <div className="flex items-center gap-4">
          <Link href={pageTitle === "Write" ? "/write" : "/feed"}>
            <Button>{pageTitle}</Button>
          </Link>
          <AvatarIcon />
        </div>
      </div>
    </nav>
  );
}
