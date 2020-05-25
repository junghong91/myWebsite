import project1 from "../../images/js.jpg";
import project2 from "../../images/nodejs.jpg";
import project3 from "../../images/react.jpg";
import WetubeMain from "../../images/WetubeMain.jpg";
import GuessMindImage from "../../images/GuessMindSkills.jpg";
import Home from "../../images/Home.jpg";
import Detail from "../../images/Detail.jpg";
import Comment from "../../images/Comment.jpg";
import LogIn from "../../images/LogIn.jpg";
import SignIn from "../../images/SignIn.jpg";
import Upload from "../../images/Upload.jpg";
import UserDetail from "../../images/UserDetail.jpg";

const projects = [
  {
    id: "wetube",
    title: "WeTube",
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
    ],
    images: [
      WetubeMain,
      Home,
      Detail,
      Comment,
      LogIn,
      SignIn,
      Upload,
      UserDetail,
    ],
  },
  {
    id: "guessmind",
    title: "GuessMind",
    description: "CatchMind cloning using JS and NodeJS",
    github: "https://github.com/junghong91/guess-mine",
    skills: ["ES6", "CSS", "HTML", "NodeJS", "SocketIO", "Gulp", "Canvas"],
    images: [GuessMindImage],
  },
  {
    id: "mernblog",
    title: "MERN Stack Blog App",
    description: "Blog App using MongoDB, Express, React and NodeJS",
    github: "https://github.com/junghong91/Blog-App-MERN-Stack",
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
