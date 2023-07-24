'use client'
import { Box, Container, Text, Image } from "@chakra-ui/react"
import Layout from "@/assets/layout"
import GridLayout from "@/assets/grid_layout"
import SkillCard from "@/components/skill_card"
const About = () =>{
    
    return(
        <Layout>
            <Box 
            w={'80%'}
            maxW={'80%'}
            h={'calc(100% - 3rem)'}
            pos={'relative'}
            m={0}
            p={0}
            top={'3rem'}
            display={'flex'}
            justifyContent={'center'}
            >
                <Container 
                maxW={'none'} 
                m={0} 
                p={0}
                w={{
                    base: '90%',
                    md: '70%'
                }}
                h={'95%'}
                mt={{
                    base:'.5rem',
                    md: '.5rem'
                }}
                display={'flex'}
                alignItems={'center'}
                flexDir={'column'}
                >
                    <Text 
                    as={'h2'}
                    fontWeight={'semibold'}
                    fontSize={{
                        base: 'lg',
                        md: '2xl'
                    }}
                    textDecor={'underline'}
                    textUnderlineOffset={'.3rem'}
                    >
                        My Skills
                    </Text>
                    <GridLayout>
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        skill="JavaScript"
                        />
                        
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        skill="TypeScript"
                        />

                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                        skill="CSS"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                        skill="HTML"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        skill="React"
                        />
                        
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                        skill="Vue"
                        />

                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg"
                        skill="Next"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
                        skill="Svelte"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                        skill="Tailwind"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                        skill="NPM"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
                        skill="YARN"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                        skill="NodeJS"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        skill="Figma"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                        skill="Firebase"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                        skill="AWS"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
                        skill="Git"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                        skill="GitHub"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                        skill="MySQL"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                        skill="PostgreSQL"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                        skill="Sass"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
                        skill="Windows"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
                        skill="Linux"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                        skill="VSCode"
                        />
                        <SkillCard 
                        thumb="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg"
                        skill="Vim"
                        />

                    </GridLayout>
                </Container>
            </Box>
        </Layout>
    )
}
export default About