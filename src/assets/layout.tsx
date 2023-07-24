'use client'
import { motion } from "framer-motion";
import { Container } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

const variants = {
    hidden: {opacity: 0, y:20},
    enter: {opacity: 1, y:0},
    exit: {opacity: 0, y:20}
}

const Layout = ({ children }: { children: React.ReactNode }) => {
    return(
        <AnimatePresence>

            <Container
            as={motion.article}
            initial="hidden"
            animate="enter"
            exit={'exit'}
            variants={variants}
            transition={'.4s ease-in-out'}
            m={0} 
            p={0} 
            maxW={'none'}
            w={'100vw'}
            h={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            >
                {children}
            </Container>
        </AnimatePresence>
    )
}
export default Layout