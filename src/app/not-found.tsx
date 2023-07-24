'use client'
import { Container, Box, Text } from "@chakra-ui/react"
import Layout from "@/assets/layout"
const NotFound = () =>{
    return(
        <Layout>

            <Container
            maxW={"none"}
            w={'100%'}
            h={'calc(100vh - 3rem|)'}
            mt={'3rem'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            >
                <Text
                fontWeight={'semibold'}
                >
                    404 / Page not Found</Text>
            </Container>
        </Layout>
    )
}
export default NotFound