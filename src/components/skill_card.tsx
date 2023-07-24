import { Container, useColorModeValue, Image, Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
    hidden: {opacity: 0, y: 20},
    enter: {opacity: 1, y: 0},
    exit: {opacity: 0, y: 20}
}

const SkillCard = ({thumb, skill} : {thumb :string, skill: string}) =>{
    return(
        <AnimatePresence>
            <Container
            maxW={'none'}
            m={0}
            p={'.4rem'}
            as={motion.div}
            initial='hidden'
            animate='enter'
            exit='exit'
            variants={variants}
            transition={'.9s ease-in-out'}
            w={'100%'}
            h={'100%'}
            aspectRatio={'1/1'}
            display={'flex'}
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={'column'}
            position={'relative'}
            border={'2px'}
            borderColor={useColorModeValue('blackAlpha.900','slategray')}
            borderRadius={'md'}
            >
                <Image
                src={thumb}
                alt={skill}
                w={'80%'}
                maxW={'5rem'}
                loading="lazy"
                aspectRatio={'1/1'}
                />
                <Text
                as={'h3'}>
                    {skill}
                </Text>
            </Container>
        </AnimatePresence>
    )
}
export default SkillCard