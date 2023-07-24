import { Container,useColorModeValue } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
    hidden : {opacity: 0, y: 20},
    enter : {opacity: 1, y: 0},
    exit : {opacity: 0, y: -20}
}
const GridLayout = ({children} : {children : React.ReactNode}) =>{
    return(
        <AnimatePresence>
            <Container
            as={motion.div}
            initial='hidden'
            animate='enter'
            m={0}
            p={'.5rem'}
            h={'100%'}
            w={'100%'}
            mt={{
                base: '.5rem',
                md: '1rem'
            }}
            maxW={'100vw'}
            exit='exit'
            variants={variants}
            transition={'.4s ease-in-out'}
            display={'grid'}
            gridTemplateColumns={{
                base: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(5,1fr)'
            }}
            gridAutoRows={'max-content'}
            gap={'.5rem'}
            justifyContent={'center'}
            position={'relative'}
            overflowY={'scroll'}
            overflowX={'hidden'}
            >
                {children}
            </Container>
        </AnimatePresence>
    )
}
export default GridLayout