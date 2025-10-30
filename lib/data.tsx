import { FaCss3, FaHtml5, FaReact, FaJs } from "react-icons/fa";
import { ProjectData } from './types';

const projectData: ProjectData = {
  SmallProjects: [
    {
      id: "color_generator",
      img: "/images/color_generator.png",
      name: "Random Color Generator",
      stack: [<FaReact key="react" size={25} />, <FaHtml5 key="html" size={25} />, <FaCss3 key="css" size={25} />, <FaJs key="js" size={25} />],
      live: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=1882s",
      source: "https://github.com/albertomtferreira/reactjs-projects/tree/master/src/components/color_generator",
      description: "Dive into generating dynamic colors and learn about state management",
      category: "Learning"
    },
    {
      id: "accordion",
      img: "/images/accordion.png",
      name: "Accordion",
      stack: [<FaReact key="react" size={25} />, <FaHtml5 key="html" size={25} />, <FaCss3 key="css" size={25} />, <FaJs key="js" size={25} />],
      live: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=482s",
      source: "https://github.com/albertomtferreira/reactjs-projects/tree/master/src/components/accordian",
      description: "Learn to create interactive collapsible content panels",
      category: "Learning"
    }
  ],
  LargeProjects: [
    {
      id: "mess-mitra",
      img: "/images/Mess.png",
      name: "Mess-Mitra",
      stack: ["< Html/>", "< Css />", "< Js />", "</React>", "</Mongo Db>", "</Express>", "</Node Js>", "</Cloudinary>"],
      live: "https://github.com/Siddhesh7777/bluebit",
      source: "https://github.com/Siddhesh7777/bluebit",
      description: "A user-friendly website intended to support bachelors who migrate to new places discovering different food mess services that are readily available in their area.",
      category: "Full Stack"
    },
    {
      id: "chat-me",
      img: "/images/Chat_me.png",
      name: "Chat_me",
      stack: ["< Html/>", "< Css />", "< Js />", "</React>", "</Mongo Db>", "</Express>", "</Node Js>", "</Cloudinary>", "</Socket I.O>"],
      live: "https://github.com/Siddhesh7777/Chat_Me_Final",
      source: "https://github.com/Siddhesh7777/Chat_Me_Final",
      description: "The Chat_me Application is a real-time chat platform that allows users to communicate with each other individually or in group chats. This is built using the MERN stack.",
      category: "Full Stack"
    }
  ]
};

// Export all projects as a single array
export const allProjects = [...projectData.LargeProjects, ...projectData.SmallProjects];

export default projectData;
