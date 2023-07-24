'use client'
import NextLink from 'next/link'
import { Box, Container, Text, Flex, Button } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin, faTwitter, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactButton from '@/components/contact_tag';
import Layout from "@/assets/layout"
const Contact = () =>{
    return(
        <Layout>
            <Box 
            w={'80%'}
            h={'calc(100% - 3rem)'}
            pos={'relative'}
            m={0}
            p={0}
            top={'3rem'}
            display={'grid'}
            placeItems={'center'}
            >
                <Container 
                maxW={'none'} 
                m={0} 
                p={0}
                w={'100%'}
                h={'90%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDir={'column'}
                >
                    <Text 
                    as={'h1'}
                    fontSize={{
                        base: 'xl',
                        md: '3xl'
                    }}
                    fontWeight={'semibold'}
                    >You can find me at:</Text>
                    <Flex
                    mt={'2rem'}
                    w={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexDirection="column"
                    rowGap={'.5rem'}
                    >
                        <ContactButton
                        props={{
                            href: 'https://github.com/Cristhian-Tapiero',
                            icon: <FontAwesomeIcon icon={faGithub}/>,
                            username: 'Cristhian-Tapiero' 
                        }}
                        />
                        <ContactButton 
                        props={{
                            href: 'https://www.instagram.com/tapieropadilla/',
                            icon: <FontAwesomeIcon icon={faInstagram}/>,
                            username: '@tapieropadilla'
                        }}
                        />
                        <ContactButton 
                        props={{
                            href: 'https://www.linkedin.com/in/cristhian-david-tapiero-padilla-070711207/',
                            icon: <FontAwesomeIcon icon={faLinkedin} />,
                            username: 'Cristhian Tapiero'
                        }}
                        />

                        <ContactButton
                        props={{
                            href: 'https://twitter.com/TapieroPadilla',
                            icon: <FontAwesomeIcon icon={faTwitter}/>,
                            username: '@TapieroPadilla'
                        }}
                        />
                        <ContactButton
                        props={{
                            href: 'https://t.me/TapieroPadilla',
                            icon: <FontAwesomeIcon icon={faTelegram}/>,
                            username: '@TapieroPadilla'
                        }} />
                        <ContactButton
                        props={{
                            href: 'https://wa.me/+573153884361',
                            icon: <FontAwesomeIcon icon={faWhatsapp}/>,
                            username: '+57 315 3884361'
                        }}/>
                    </Flex>
                </Container>
            </Box>
        </Layout>
    )
}
export default Contact