import Card from "../Card/Card";
import "./About.css";
import frontend from "../../assets/fronted-developer.png";
import cpp from "../../assets/C++.png";
import dsa from "../../assets/leetcode.png";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  let cards = [
    { title: "frontend developer", image: frontend },
    { title: "C++", image: cpp },
    { title: "Competetive Programmer", image: dsa },
  ];
  return (
    <div id="about" className="min-h-[100vh] h-fit mt-10 w-full flex">
      <div className="left w-[50%] h-full flex items-center justify-center gap-[50px]">
        <div className="circle flex items-center justify-center flex-col">
          <div className="round w-[70px] h-[70px] rounded-full shadow-[0px_10px_30px_[#7ed7ea]]  shadow-[#7ad7ea] bg-cyan-300 flex items-center justify-center text-4xl text-black cursor-pointer active:scale-95">
            {" "}
            <a
              href="https://www.linkedin.com/in/priyanshu-khristi-5419262b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <CiLinkedin />
            </a>
          </div>
          <div className="line w-[3px] h-[150px] bg-white"></div>
          <div className="round w-[70px] h-[70px] rounded-full shadow-[0px_10px_30px_[#7ed7ea]]  shadow-[#7ad7ea] bg-cyan-300 flex items-center justify-center text-4xl text-black cursor-pointer active:scale-95">
          <a
              href="https://github.com/Pkhristi-devloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FaGithub />
            </a>
          </div>
          <div className="line w-[3px] h-[150px] bg-white"></div>
          <div className="round w-[70px] h-[70px] rounded-full shadow-[0px_10px_30px_[#7ed7ea]]  shadow-[#7ad7ea] bg-cyan-300 flex items-center justify-center text-4xl text-black cursor-pointer active:scale-95">
          <a
              href="https://leetcode.com/u/pkhristi_27/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <SiLeetcode />
            </a>
          </div>
        </div>
        <div className="information py-[20px] flex flex-col h-full justify-between gap-[5vh]">
          <div className="first">
            <h1 className="text-3xl uppercase font-bold bg-linear-90 from-[#ff0062] to-zinc-300 bg-clip-text text-transparent">
              Personal Info
            </h1>
            <ul>
              <li>
                <span className="text-cyan-400">Name : </span> Priyanshu Khristi
              </li>
              <li>
                <span className="text-cyan-400">Age : </span> 19 years
              </li>
              <li>
                <span className="text-cyan-400">Gender : </span>Male
              </li>
              <li>
                <span className="text-cyan-400">Languages Known : </span>Hindi,
                English, Gujarati
              </li>
            </ul>
          </div>
          <div className="second">
            <h1 className="text-3xl uppercase font-bold bg-linear-90 from-[#ff0062] to-zinc-300 bg-clip-text text-transparent">
              Education
            </h1>
            <ul>
              <li>
                <span className="text-cyan-400">Degree :</span> B.E.(Second
                Year)
              </li>
              <li>
                <span className="text-cyan-400">Branch : </span>Information
                Technology
              </li>
              <li>
                <span className="text-cyan-400">CGPA : </span>9.35
              </li>
            </ul>
          </div>
          <div className="third">
            <h1 className="text-3xl uppercase font-bold bg-linear-90 from-[#ff0062] to-zinc-300 bg-clip-text text-transparent">
              Skills
            </h1>
            <ul>
              <li>Web Development </li>
              <li>Frontend Development</li>
              <li>React Development</li>
              <li>JavaScript Development</li>
              <li>Competitive Programming</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right w-[50%]">
        <div className="container flex gap-[5vh] flex-col">
          {cards.map((card, index) => {
            return <Card key={index} title={card.title} image={card.image} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
