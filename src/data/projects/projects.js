import amazonMin from "./projectsImages/amazonMin.png";
import covidMin from "./projectsImages/covidMin.png";
import instaMin from "./projectsImages/instaMin.png";

const projects = [
  {
    poster: covidMin,
    title: "Covid-19 Tracker",
    description: "React Covid-19 tracker app",
    stack: ["React", "Leaflet.js"],
    codeLink: "https://github.com/Akr1s/covid-tracker",
    liveLink: "https://covid-traker-be873.web.app/",
  },
  {
    poster: amazonMin,
    title: "Amazon Clone",
    description: "Amazon Clone React app",
    stack: ["React", "React Contex Api", "Firebase"],
    codeLink: "https://github.com/Akr1s/amazon-clone",
    liveLink: "https://cl-62273.web.app/",
  },
  {
    poster: instaMin,
    title: "Instagram Clone",
    description: "Instagram Clone React app",
    stack: ["React", "React Contex Api", "Firebase"],
    codeLink: "https://github.com/Akr1s/instagram-clone",
    liveLink: "https://instagram-clone-54f9c.web.app/",
  },
];

export default projects;
