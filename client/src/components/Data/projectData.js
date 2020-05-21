import project1 from "../../images/js.jpg";
import project2 from "../../images/nodejs.jpg";
import project3 from "../../images/react.jpg";
import WetubeMain from "../../images/WetubeMain.jpg";
import WetubeHome from "../../images/WetubeHome.jpg.png";
import GuessMindImage from "../../images/GuessMindSkills.jpg";

const projects = [
  {
    id: "wetube",
    title: "Wetube",
    description: "Youtube Cloning Project",
    github: "https://github.com/junghong91/wetube",
    page: "https://dry-plains-77031.herokuapp.com/",
    skills: [
      "NodeJS",
      "ES6",
      "Express",
      "Pug",
      "Passport",
      "AJAX",
      "Webpack",
      "SCSS",
      "MongoDB",
      "MongoDB Atlas",
      "AWS S3",
      "Heroku",
    ],
    images: [WetubeMain, WetubeHome],
  },
  {
    id: "guessmind",
    title: "GuessMind",
    description: "CatchMind cloning using JS and NodeJS",
    github: "https://github.com/junghong91",
    skills: ["ES6", "CSS", "HTML", "NodeJS", "SocketIO", "Gulp", "Canvas"],
    images: [GuessMindImage],
  },
  {
    id: "mernblog",
    title: "MERN Stack Blog App",
    description: "Blog App using MongoDB, Express, React and NodeJS",
    github: "https://github.com/junghong91",
    skills: [
      "Javascript",
      "CSS",
      "HTML",
      "React",
      "NodeJS",
      "Express",
      "MongoDB",
    ],
    images: [project1, project2, project3],
  },
];

export default projects;
