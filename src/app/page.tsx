'use client'
import Layout from "@/assets/layout"
import Image from "next/image"
import Profile from '../assets/ProfileSquare.jpg'
import { 
  Box,
  Text, 
  Container,
  Heading, 
  useColorModeValue
} from "@chakra-ui/react"
import StyledDiv from "@/assets/section"
import Contacts from "@/components/contacts"
const App = () =>{
  return(
    <Layout>
      <Container
      pos={'relative'}
      w={'80%'} 
      h={'calc(100% - 3rem)'} 
      m={0} 
      p={0} 
      maxW={'none'} 
      display={'flex'} 
      flexDir='column' 
      alignItems={'center'}
      top={'3rem'}
      >
        <Box 
        m={0} 
        p={0} 
        pos={'relative'} 
        w={{
          base:'90%',
          md: '80%'
        }} 
        h={{
          base: '3rem',
          lg: '4rem'
        }}
        display={'flex'} 
        alignItems={'center'} 
        justifyContent={'center'} 
        bgColor={'red.600'} 
        marginTop={{
          base: '.5rem',
          md: '.9rem'
        }} 
        borderRadius={['15px','25px','25px']}
        >
          <Text 
          color={'whiteAlpha.800'} 
          fontSize={['xs','md','xl']}
          textAlign={'center'}
          >
            Hello World! I&apos;m a front-end developer
          </Text>
        </Box>
        <Box 
        display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        w={{
          base: '90%',
          md: '80%'
        }}
        mt={'1rem'}
        flexDir={"column"}
        >
          <Heading 
          fontSize={{
            base: 'md',
            md: 'xl',
            xl: '4xl'
          }}
          textAlign={"center"}
          >
            Cristhian David Tapiero Padilla 
          </Heading>
          <Text 
          textAlign={'center'}
          fontSize={{
            base: 'xs',
            sm: 'md',
            md: 'xl'
          }}
          >
            Developer | Systems Engineering Student | Computer Friki
          </Text>
        </Box>
        <Box
        pos={'relative'}
        w={{
          base: 150,
          md: 300
        }}
        h={{
          base: 150,
          md: 300
        }}
        mt={{
          base: '.5rem',
          md: '1.5rem'
        }}
        >
          <Image 
          src={Profile}
          alt="Profile Pic"
          style={{
            objectFit: 'cover',
            borderRadius: '50%'
          }}
          />
        </Box>
        <Contacts />
        <StyledDiv title="Resume">
          <Text
          fontWeight={'normal'}
          fontSize={{
            base: 'md',
            md: 'xl'
          }}
          textAlign={'center'}
          w={{
            base: '100%',
            md: '70%'
          }}
          alignSelf={'center'}
          mb={'2rem'}
          >
            Front-End developer capable of solving 
            problems in the most creative and effective 
            way; even in the worst scenario, he&apos;s capable
            of fixing any problem with code. Deeply 
            interested in helping people solve their 
            problems and doubts, he is always ready 
            to guide his team to victory.
            Anything you need, I&apos;m here to help you!
          </Text>
        </StyledDiv>
      </Container>
    </Layout>
  )
}
export default App