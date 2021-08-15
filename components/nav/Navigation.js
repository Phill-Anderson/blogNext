import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { UseNavIcons } from "hooks/use-nav-icons"
import { useTheme } from "hooks/use-theme"
const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => {
    const { theme } = useTheme()
    const { sun, moon, home, profile, blog, projects, contact, challenges } = UseNavIcons(theme)
    return (
        <motion.ul variants={variants} >
            {
                <>
                    <MenuItem key={'1'} icon={home} title={'Нүүр'} link={'/'} />
                    <MenuItem key={'2'} icon={profile} title={'Профайл'} link={'/profile'} />
                    <MenuItem key={'3'} icon={blog} title={'Нийтлэл'} link={'/blog'} />
                    <MenuItem key={'4'} icon={projects} title={'Төслүүд'} link={'/projects'} />
                    <MenuItem key={'5'} icon={challenges} title={'Код Чейлэнж'} link={'/challenges'} />
                    <MenuItem key={'6'} icon={contact} title={'Холбоо барих'} link={'/contact'} />
                </>
            }
        </motion.ul >
    )
};

const itemIds = [0, 1, 2, 3, 4];
