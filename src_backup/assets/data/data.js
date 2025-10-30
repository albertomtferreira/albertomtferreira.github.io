
import RestCountries from "../portfolioImages/restcountries.jpg";
import Chat_me from "../portfolioImages/Chat_me.png"
import Messmitra from "../portfolioImages/Mess.png"
import { FaCss3, FaHtml5, FaReact, FaJs } from "react-icons/fa";
import ColorGenerator from "../images/color_generator.png"

import Accordion from "../images/accordion.png";

const SmallProjects = [
  {
    id: "color_generator",
    img: ColorGenerator,
    name: "Random Color Generator",
    stack: [<FaReact size={25} />, <FaHtml5 size={25} />, <FaCss3 size={25} />, <FaJs size={25} />],
    live: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=1882s",
    source: "https://github.com/albertomtferreira/reactjs-projects/tree/master/src/components/color_generator",
    description:
      "Dive into generating dynamic colors and learn about state management"
  }, {
    id: "accordion",
    img: Accordion,
    name: "Accordion",
    stack: [<FaReact size={25} />, <FaHtml5 size={25} />, <FaCss3 size={25} />, <FaJs size={25} />],
    live: "https://www.youtube.com/watch?v=5ZdHfJVAY-s&t=482s",
    source: "https://github.com/albertomtferreira/reactjs-projects/tree/master/src/components/accordian",
    description:
      "Learn to create interactive collapsible content panels"
  }
];



const LargeProjects = [
  {
    id: "rest-countries",
    img: Messmitra,
    name: "Mess-Mitra",
    stack: ["< Html/>", "< Css />", "< Js />", "</React>", "</Mongo Db>", "</Express>", "</Node Js>", "</Cloudinary>"],
    live: "https://github.com/Siddhesh7777/bluebit",
    source: "https://github.com/Siddhesh7777/bluebit",
    description:
      "A user-friendly website intended to support bachelors who migrate to new places discovering different food mess services that are readily available in their area.  "
  },
  {
    id: "rest-countries",
    img: Chat_me,
    name: "Chat_me",
    stack: ["< Html/>", "< Css />", "< Js />", "</React>", "</Mongo Db>", "</Express>", "</Node Js>", "</Cloudinary>", "</Socket I.O>"],
    live: "https://github.com/Siddhesh7777/Chat_Me_Final",
    source: "https://github.com/Siddhesh7777/Chat_Me_Final",
    description:
      "The Chat_me Application is a real-time chat platform that allows users to communicate with each other individually or in group chats. This  is built using the MERN stack.",
  },
]

export default { SmallProjects, LargeProjects }
