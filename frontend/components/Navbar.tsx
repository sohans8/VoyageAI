export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-5 bg-slate-900 text-white">
      <h1 className="text-2xl font-bold text-blue-400">
        Planora - Your Travel Planner
      </h1>

      <div className="flex gap-8">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Trips</a>
        <a href="#" className="hover:text-blue-400">About</a>
        <a href="#" className="hover:text-blue-400">Contact</a>
      </div>

      <button className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}