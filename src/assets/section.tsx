import { Container,Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
const variants = {
    hidden: { opacity: 0, y: 20},
    enter: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 20}
}
const StyledDiv = ({children, title} : {children: React.ReactNode, title?: string}) =>{
    return(
        <AnimatePresence>

            <Container
            as={motion.div}
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={'.9s ease-in-out'}
            m={0}
            p={0}
            position={"relative"}
            maxW={"none"}
            w={'80%'}
            display={'flex'}
            flexDir={'column'}
            justifyContent={'center'}
            >
                {title &&
                    <Text 
                    as={'h2'}
                    fontSize={{
                        base: 'xl',
                        md: '4xl'
                    }}
                    textDecor={'underline'}
                    textUnderlineOffset={'.3rem'}
                    fontWeight={'semibold'}
                    mb={{
                        base: '1rem',
                        md: '2rem'
                    }}
                    textAlign={'center'}
                    >
                        {title}
                    </Text>
                }
                { children }
            </Container>
        </AnimatePresence>
    )
}
export default StyledDiv