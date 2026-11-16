import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsFileEarmarkCode } from "react-icons/bs";
import {
  MdOutlineRestaurantMenu,
  MdSchool,
  MdKeyboard,
} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const links = [
  {
    name: "Website",
    href: "/",
    icon: SiNextdotjs,
    iconClass: "text-gray-900",
  },
  {
    name: "GitHub",
    href: "https://github.com/Mohd-Arzaid",
    icon: AiFillGithub,
    iconClass: "text-gray-900",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohd-arzaid-3220742ab/",
    icon: AiFillLinkedin,
    iconClass: "text-blue-600",
  },
  {
    name: "Twitter",
    href: "https://x.com/__Arzaid__",
    icon: AiFillTwitterCircle,
    iconClass: "text-blue-500",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_arzaid_",
    icon: FaInstagram,
    iconClass: "text-pink-500",
  },
  {
    name: "StudyNotion",
    href: "https://arzaid-ed-tech-platform.vercel.app/",
    icon: MdSchool,
    iconClass: "text-yellow-600",
  },
  {
    name: "Food App",
    href: "https://arzaid-food-app.vercel.app/",
    icon: MdOutlineRestaurantMenu,
    iconClass: "text-orange-500",
  },
  {
    name: "Typing Hub",
    href: "https://arzaid-typing-hub.netlify.app/",
    icon: MdKeyboard,
    iconClass: "text-emerald-600",
  },
  {
    name: "Auth Flow",
    href: "https://arzaid-auth-flow.vercel.app/",
    icon: RiLockPasswordLine,
    iconClass: "text-violet-600",
  },
  {
    name: "Projects",
    href: "/projects",
    icon: BsFileEarmarkCode,
    iconClass: "text-gray-700",
  },
];

export default links;
