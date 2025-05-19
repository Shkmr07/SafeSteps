import { Footprints } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 ">
      <div className="flex items-center gap-2">
        <Footprints className="w-8 h-8 text-red-500" />
        <h1 className="text-lg font-bold bg-clip-text text-transparent  bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400">
          SafeSteps
        </h1>
      </div>
      <ul className=" cursor-pointer flex space-x-4 bg-gradient-to-bl from-pink-600 to-yellow-400 bg-clip-text text-transparent  font-bold tracking-wider ">
        <li className="flex flex-col items-center gap-0.5 group">
          Home
          <span className="text-center bg-gradient-to-l from-red-400 to-pink-400 w-[80%] h-1 rounded-t bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </li>

        <li className="flex flex-col items-center gap-0.5 group">
          Safety Tips
          <span className="text-center bg-gradient-to-l from-red-400 to-pink-400 w-[80%] h-1 rounded-t bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </li>

        <li className="flex flex-col items-center gap-0.5 group">
          Login
          <span className="text-center bg-gradient-to-l from-red-400 to-pink-400 w-[80%] h-1 rounded-t bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </li>

        <li className="flex flex-col items-center gap-0.5 group">
          Register
          <span className="text-center bg-gradient-to-l from-red-400 to-pink-400 w-[80%] h-1 rounded-t bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
        </li>
      </ul>
    </nav>
  );
}
