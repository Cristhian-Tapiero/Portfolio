'use client'
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { motion } from "framer-motion"
const variants = {
    hidden : {opacity: 0, y: 20},
    enter: {opacity: 1, y:0},
    exit: {opacity: 0, y:-20}
}
const ThemeTogglerButton = () =>{
    const { toggleColorMode } = useColorMode()
    return(
        <motion.div
        key={useColorModeValue('light', 'dark')}
        initial='hidden'
        animate='enter'
        exit='exit'
        variants={variants}
        transition={{ duration:0.9}}
        >
            <IconButton 
            aria-label="Toggle Theme"
            variant={'outline'}
            mr={{
                base: '.5rem',
                xl: '1.5rem'
            }}
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
            onClick={toggleColorMode}
            />
        </motion.div>
    )

}
export default ThemeTogglerButton