import Card from "../Card/Card";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Food Delivery Website",
      image:
        "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/food.png?raw=true",
      url: "https://food-delivery-app-omega-gold.vercel.app/",
    },
    {
      title: "Chatgpt Ai Assistant",
      image:
        "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/gpt.png?raw=true",
      url: "https://chatgpt-own-ai-model.vercel.app/",
    },
    {
      title: "Obys Agency",
      image:
        "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/Obys.png?raw=true",
      url: "https://pkhristi-devloper.github.io/Obys-Agency/",
    },
    {
      title: "Dragging Cards",
      image:
        "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/cards.png?raw=true",
      url: "https://pkhristi-devloper.github.io/Dragging-cards/",
    },
    {
      title: "Refokus Clone",
      image:
        "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/refokus.png?raw=true",
      url: "https://github.com/Pkhristi-devloper/Refokus-Clone",
    },
    {
      title: "Ochi Eye Animation",
      image:
        "https://github.com/Pkhristi-devloper/Personal-Portfolio-Basic-/blob/main/src/assets/ochi.png?raw=true",
      url: "https://github.com/Pkhristi-devloper/Ochi-Eye-Opening-Animation",
    },
  ];

  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="h-fit w-full min-h-[80vh] pt-20 px-5" id="projects">
      <h1
        className="text-4xl font-extrabold text-center bg-gradient-to-r from-[#ff0055] via-[#f7558b] to-[#eed3e0] bg-clip-text text-transparent"
      >
        Some of My Previous Projects
      </h1>

      <div className="mainContainer flex items-center h-[400px] overflow-hidden relative">
        <div className="sliderTrack flex w-max animate-scrollLeft gap-[20px]">
          {duplicatedProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="w-[400px] shrink-0"
            >
              <Card title={project.title} image={project.image} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
