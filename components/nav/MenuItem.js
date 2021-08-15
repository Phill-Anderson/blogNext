import * as React from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = ({ i, icon, title, link }) => {
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        router.push(link)
    }

    return (
        <motion.li
            key={i}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className={`${router.asPath === link ? 'active' : ''}`}
        >
            {icon} {title}
        </motion.li>
    );
};
