import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <Plane className="h-6 w-6 text-blue-500" />
          <h1 className="text-2xl font-bold text-white">
            Voyage<span className="text-blue-500">AI</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#" className="hover:text-blue-400 transition">Destinations</a>
          <a href="#" className="hover:text-blue-400 transition">Pricing</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
        </div>

        <Button>Login</Button>
      </div>
    </nav>
  );
}