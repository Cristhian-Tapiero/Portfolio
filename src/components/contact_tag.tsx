import { Button } from "@chakra-ui/react";
import NextLink from 'next/link'
interface Props {
    icon: JSX.Element
    href: string
    username: string
}
const ContactButton = ({props} : {props : Props}) =>{
    return(
        <Button
        as={NextLink}
        href={props.href}
        passHref
        target="_blank"
        display={'inline-flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'.4rem'}
        leftIcon={props.icon}
        variant={'outline'}
        aria-label={props.username}
        w={'14rem'}
        >
            {props.username}
        </Button>
    )
}
export default ContactButton