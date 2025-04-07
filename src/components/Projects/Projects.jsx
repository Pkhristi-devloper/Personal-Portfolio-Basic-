import "./Projects.css";

const Projects = () => {
  let projects = [
    {
      title:"Food Delivery Website",
      image:"https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/food.png",
      url:"https://food-delivery-app-omega-gold.vercel.app/"
    },
    {
      title:"Chatgpt Ai Assistant",
      image:"https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/gpt.png",
      url:"https://chatgpt-own-ai-model.vercel.app/"
    },
    {
      title: "Obys Agency",
      image: "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/Obys.png",
      url: "https://pkhristi-devloper.github.io/Obys-Agency/",
    },
    {
      title:"Dragging cardds",
      image:"https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/cards.png",
      url:"https://pkhristi-devloper.github.io/Dragging-cards/"
    },
    {
      title: "Refokus clone",
      image: "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/refokus.png",
      url: "https://github.com/Pkhristi-devloper/Refokus-Clone",
    },
    {
      title: "Ochi Eye Animation",
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
