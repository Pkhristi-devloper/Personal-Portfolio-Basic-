import "./Home.css";
import man from "../../assets/man.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div
      className="home-container h-fit w-full min-h-[90vh] flex pt-[10vh]"
      id="home"
    >
      <div className="left h-[90vh] w-[50%] flex flex-col items-center justify-center ">
        <div className="homedetails flex flex-col gap-[5vh] ">
          <div className="first text-2xl">I&apos;M</div>
          <div className="second text-5xl font-bold uppercase bg-linear-90 from-blue-500 via-zinc-300 to-cyan-500 bg-clip-text text-transparent">
            Priyanshu Khristi
          </div>
          <div className="third text-3xl">
            <TypeAnimation
              sequence={[
                "WEB DEVELOPER",
                1000,
                "SOFTWARE DEVELOPER",
                1000,
                "COMPETITIVE PROGRAMMER",
                1000,
                "FRONTEND DEVELOPER",
                1000,
                "REACT DEVELOPER",
                1000,
                "UI/UX DESIGNER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.8rem", display: "inline-block" }}
              repeat={Infinity}
              cursor = "pointer"
            />
          </div>
            <button className="bg-[rgb(116,201,225)] h-fit w-fit px-6 py-2 text-black text-lg rounded-4xl cursor-pointer border-[2px] border-[rgb(116,201,225)] hover:bg-transparent hover:text-[rgb(116,201,225)] active:scale-95 transition-all duration-500">Hire Me</button>
        </div>
      </div>
      <div className="right h-[90vh] w-[50%] flex items-center justify-center drop-shadow-[2px_2px_20px_rgb(116,201,225)]">
        <img src={man} alt="" className="h-[70%]" />
      </div>
    </div>
  );
};

export default Home;
