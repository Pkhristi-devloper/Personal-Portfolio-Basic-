import { Link } from "react-scroll";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Nav = () => {
  const arr = ["Home", "About", "Projects", "Contact"];
  const [show, setShow] = useState(false);
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from("nav h1",{
      y:-100,
      opacity:0,
      duration:1,
    })
  })
  return (
    <nav className="w-full h-[10vh] flex items-center justify-between px-5 fixed z-50 bg-[rgb(17,20,23)]">
      <h1 className="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-zinc-300 font-extrabold">
        PORTFOLIO
      </h1>

      {/* Desktop Menu */}
      <ul className="desktopMenu gap-5 text-lg font-semibold hidden md:flex items-center">
        {arr.map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase()}
            smooth={true}
            duration={1000}
            activeClass="text-[rgb(67,255,255)] border-b-[2px] border-[rgb(67,255,255)]"
            spy={true}
          >
            <li className="cursor-pointer hover:border-b-[2px] border-[rgb(67,255,255)] transition-all duration-400 hover:text-[rgb(67,255,255)]">
              {item}
            </li>
          </Link>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={() => setShow((prev) => !prev)}
        className="hamburger md:hidden flex items-center justify-center flex-col gap-2 cursor-pointer"
      >
        {!show ? <><div className="ham w-[30px] h-[2px] bg-white"></div>
        <div className="ham w-[30px] h-[2px] bg-white"></div>
        <div className="ham w-[30px] h-[2px] bg-white"></div></> : <IoMdClose className="text-4xl" />
    }
      </div>

      {/* Mobile Menu (Slide Animation) */}
      <ul
        className={`mobileMenu fixed top-[10vh] w-full h-[100vh]  backdrop-blur-md text-xl flex flex-col items-center justify-center gap-10 transform transition-transform duration-500 z-40 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {arr.map((item, index) => (
          <Link
            key={index}
            to={item.toLowerCase()}
            smooth={true}
            duration={300}
            activeClass="text-[rgb(67,255,255)] border-b-[2px] border-[rgb(67,255,255)]"
            spy={true}
            onClick={() => setShow(false)}
          >
            <li className="cursor-pointer hover:border-b-[2px] border-[rgb(67,255,255)] transition-all duration-400 hover:text-[rgb(67,255,255)]">
              {item}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
