import { useEffect, useState } from "react";
import img1 from "../assets/l1.jpg";
import img2 from "../assets/l2.jpg";
import img3 from "../assets/l3.jpg";
import img4 from "../assets/l4.jpg";
import Google from "../assets/googleIcon.png";
import { Eye, EyeClosed, X } from "lucide-react";

export default function Login() {
  const images = [img1, img2, img3, img4];
  const [idx, setIdx] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIdx((prev) => {
        return (prev + 1) % images.length;
      });
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative m-auto w-3xl bg-gray-100 shadow-lg flex gap-5 rounded-xl items-center p-4">
      <X className="cursor-pointer absolute right-5 top-5 transition-transform hover:rotate-90" />
      <div className="w-sm h-96 ">
        <img
          className="w-full h-full rounded-xl object-cover"
          src={images[idx]}
          alt="banner"
        />
      </div>

      <div className="w-full flex flex-col gap-4">
        <p className="text-lg font-bold tracking-wide bg-clip-text text-transparent  bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 ">
          Login / Signup
        </p>
        <form className="flex flex-col gap-2" action="">
          <label className="font-bold tracking-wide " htmlFor="email">
            Email
          </label>
          <input
            className="p-2 italic border border-slate-300 rounded focus:border-2 focus:border-sky-500 outline-none"
            placeholder="Email"
            type="text"
            name=""
            id="email"
          />
          <label className="font-bold tracking-wide" htmlFor="pass">
            Password
          </label>

          <div className="relative flex flex-col ">
            <input
              className="p-2 italic border border-slate-300 rounded focus:border-2 focus:border-sky-500 outline-none"
              type={show ? "text" : "password"}
              placeholder="Password"
              name=""
              id="pass"
            />
            {show ? (
              <Eye
                onClick={() => setShow((prev) => !prev)}
                className=" cursor-pointer w-5 h-5 absolute top-1/2 right-5 translate-x-1/2 -translate-y-1/2 "
              />
            ) : (
              <EyeClosed
                onClick={() => setShow((prev) => !prev)}
                className="cursor-pointer w-5 h-5 absolute top-1/2 right-5 translate-x-1/2 -translate-y-1/2 "
              />
            )}
          </div>
          <button className="transition-transform cursor-pointer mt-2 p-2 bg-green-500 hover:bg:green-600 hover:scale-105 text-white rounded font-bold tracking-wide">
            Submit
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-[50%] h-0.5 bg-slate-300"></div>
          <p className="text-sm text-slate-500 font-bold">OR</p>
          <div className="w-[50%] h-0.5 bg-slate-300"></div>
        </div>

        <div className="flex items-center transition-transform gap-3 justify-center px-2 py-1.5  rounded bg-slate-200 border hover:scale-105 cursor-pointer ">
          <img className="w-7 h-7" src={Google} alt="Google Logo" />
          <p className="font-semibold  ">Continue with Google</p>
        </div>
      </div>
    </section>
  );
}
