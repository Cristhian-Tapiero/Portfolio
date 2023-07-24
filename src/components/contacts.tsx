import { Flex, IconButton } from "@chakra-ui/react";
import NextLink from 'next/link'
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import StyledDiv from "@/assets/section";
const Contacts = () =>{
    const router = useRouter()
    return(
        <StyledDiv title="">

            <Flex 
            m={0}
            p={0}
            mt={'1rem'}
            gap={'.5rem'}
            justifyContent={'center'}
            >
                <IconButton
                as={NextLink}
                href={'https://github.com/Cristhian-Tapiero'}
                target ={'_blank'}
                variant={"outline"}
                aria-label="GitHub"
                icon={<FontAwesomeIcon icon={faGithub}/>}
                />

                <IconButton
                as={NextLink}
                href={'https://www.linkedin.com/in/cristhian-david-tapiero-padilla-070711207/'}
                target="_blank"
                variant={'outline'}
                aria-label="LinkedIn"
                icon={<FontAwesomeIcon icon={faLinkedin}/>}
                />
                <IconButton
                as={NextLink}
                href='https://www.instagram.com/tapieropadilla/'
                target="_blank"
                variant={'outline'}
                aria-label="Instagram"
                icon={<FontAwesomeIcon icon={faInstagram}/>}
                />
                <IconButton
                as={NextLink}
                href={'/contact'}
                variant={'outline'}
                aria-label="More Contacts"
                icon={<FontAwesomeIcon icon={faEllipsis}/>}
                />
            </Flex>
        </StyledDiv>
    )
}
export default Contacts