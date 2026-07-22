import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-8 bg-slate-900">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <Image
          src="/frontendpubliclogo.png"
          alt="Planora - Your Travel Planner"
          width={180}
          height={60}
          priority
          className="max-h-auto w-auto object-contain"
        />
      </a>

      {/* Navigation */}
      <div className="flex gap-8 text-white font-medium">
        <a href="#" className="hover:text-blue-400 transition">
          Home
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Trips
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          About
        </a>
        <a href="#" className="hover:text-blue-400 transition">
          Contact
        </a>
      </div>

      {/* Login Button */}
      <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 text-white transition">
        Login
      </button>
    </nav>
  );
}