"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto relative">
        <Link href="/" className="text-2xl font-serif">
          Median
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href={"/?signupmodal=true"}
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Write
          </Link>
          <Link
            href={"/?signinmodal=true"}
            className="text-sm text-gray-700 hover:text-gray-900"
          >
            Sign in
          </Link>
          <Link href={"/?signupmodal=true"}>
            <Button
              variant="default"
              className="bg-black text-white rounded-full hover:bg-gray-800"
            >
              Get started
            </Button>
          </Link>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden absolute right-6 top-1/2 -translate-y-1/2"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg mt-4 z-50">
            <nav className="flex flex-col p-4 space-y-4">
              <Link
                href={"/?signupmodal=true"}
                className="text-sm text-gray-700 hover:text-gray-900 block"
                onClick={toggleMenu}
              >
                Write
              </Link>
              <Link
                href={"/?signinmodal=true"}
                className="text-sm text-gray-700 hover:text-gray-900 block"
                onClick={toggleMenu}
              >
                Sign in
              </Link>
              <Link href={"/?signupmodal=true"}>
                <Button
                  variant="default"
                  className="bg-black text-white rounded-full hover:bg-gray-800 w-full"
                  onClick={toggleMenu}
                >
                  Get started
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="relative px-6 pt-24 pb-32 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-6">
            Human stories & ideas
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            A place to read, write, and deepen your understanding
          </p>
          <Link href={"/?signupmodal=true"}>
            <Button
              variant="default"
              className="bg-black text-white rounded-full px-8 py-6 text-lg hover:bg-gray-800"
            >
              Start reading
            </Button>
          </Link>
        </div>

        <div className="hidden md:block absolute right-0 top-0 w-96 h-96">
          <div className="absolute right-8 top-8 w-32 h-32 bg-[#0FBF5C] rounded-full opacity-80" />
          <div className="absolute right-24 top-16 text-2xl">★</div>
          <div className="absolute right-48 top-32 text-xl">★</div>
          <div className="absolute right-16 top-48 text-lg">★</div>
          <div className="border-dashed border-gray-300 border-b rotate-45 w-48 absolute right-0 bottom-0" />
        </div>
      </main>
    </div>
  );
}
