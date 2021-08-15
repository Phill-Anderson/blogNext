import { IconContext } from "react-icons";
import { FaSun, FaMoon, FaHome, FaBlog, FaPhoneAlt, FaListOl } from 'react-icons/fa';
import { ImProfile } from "react-icons/im"
import { GoProject } from "react-icons/go"
import { MdContactPhone } from "react-icons/md"
import { RiFolderHistoryFill } from "react-icons/ri"
export const UseNavIcons = (theme) => {
    const sun = <IconContext.Provider value={{ color: "white" }}> <FaSun /></IconContext.Provider>;
    const moon = <IconContext.Provider value={{ color: "white" }}> <FaMoon /> </IconContext.Provider>;
    const home = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <FaHome /></IconContext.Provider>;
    const profile = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <ImProfile /></IconContext.Provider>;
    const blog = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <FaBlog /></IconContext.Provider>;
    const projects = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <GoProject /></IconContext.Provider>;
    const contact = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <FaPhoneAlt /></IconContext.Provider>;
    const challenges = <IconContext.Provider value={{ size: "30px", color: theme.type === "dark" ? "white" : "#63696e" }}> <RiFolderHistoryFill /></IconContext.Provider>;
    return {
        sun, moon, home, profile, blog, projects, contact, challenges
    };
};