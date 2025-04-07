import "./Projects.css";

const Projects = () => {
  let projects = [
    {
      title:"Food Delivery Website",
      image:"",
      url:"https://food-delivery-app-omega-gold.vercel.app/"
    },
    {
      title:"Chatgpt Ai Assistant",
      image:"",
      url:"https://chatgpt-own-ai-model.vercel.app/"
    },
    {
      title: "Obys Agency",
      image: "",
      url: "https://pkhristi-devloper.github.io/Obys-Agency/",
    },
    {
      title:"Dragging cardds",
      image:"",
      url:"https://pkhristi-devloper.github.io/Dragging-cards/"
    },
    {
      title: "Refokus clone",
      image: "",
      url: "https://github.com/Pkhristi-devloper/Refokus-Clone",
    },
    {
      title: "Landing page",
      image: "",
      url: "https://github.com/Pkhristi-devloper/Landing-page",
    },
  ];
  return (
    <div className="h-full w-full min-h-[100vh]" id="projects">
      <h1>Some of My Previous Projects</h1>
      <div className="container"></div>
    </div>
  );
};

export default Projects;
