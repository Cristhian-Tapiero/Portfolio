'use client'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'
import { IconButton } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import ThemeTogglerButton from './theme_toogler'
import {
    Box, 
    Container, 
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Heading,
    Image
} from '@chakra-ui/react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
const Nav = () =>{
    const currentRoute : string = usePathname()
    const router = useRouter()
    return(
        <Box 
        w={'100vw'}
        h={'3rem'}
        pos={'fixed'}
        top={0}
        zIndex={30}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        backgroundColor={'rgba(255,255,255, .01)'}
        backdropFilter={'blur(8px)'}
        >
            <Container 
            maxW={'none'}
            w={{
                base: '100%',
                md: '90%',
                xl: '85%'
            }}
            h={'full'}
            m={0}
            p={0}
            display={'flex'}            
            alignItems={'center'}
            justifyContent={'space-between'}
            >
                <Container
                display={'flex'}
                textAlign={'center'}
                h={'100%'}
                gap={'.2rem'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                m={0}
                p={0}
                maxW={'none'}
                ml={'.2rem'}
                _hover={{
                    cursor:'pointer'
                }}
                onClick={() => { router.push('/') }}
                >
                    <Image
                    aspectRatio={'1/1'}
                    maxH={'90%'}
                    w={'auto'}
                    src={'./icon.png'}
                    alt='Icon' 
                    mx={{
                        base: '.2rem',
                        md: '.5rem'
                    }}
                    />
                    <Heading 
                    fontSize={{
                        base: 'md',
                        md: '2xl'
                    }}
                    >
                        Cristhian Tapiero
                    </Heading>
                </Container>
                <Container 
                as={'section'} 
                maxW={'none'} 
                w={'auto'} 
                m={0}
                p={0}
                mr={'1rem'}
                display={{
                    base: 'inline-flex',
                    sm: 'inline-flex',
                    md: 'none',
                    xl: 'none'
                }}
                >
                    <ThemeTogglerButton/>
                    <Menu>
                        <MenuButton
                        as={IconButton}
                        aria-label='Open Menu'
                        icon={<HamburgerIcon/>}
                        variant={'outline'}
                        />
                        <MenuList>
                            <MenuItem
                            as={NextLink} 
                            href={'/'} 
                            passHref 
                            aria-label='Start'
                            textDecor={currentRoute == '/' ? 'underline' : 'none'}
                            fontWeight={currentRoute == '/'?'semibold':'normal'}
                            textDecorationThickness={'2px'}
                            >
                                Start
                            </MenuItem>
                            <MenuItem
                            as={NextLink}
                            href={'/skills'} 
                            passHref 
                            aria-label='Skills'
                            textDecor={currentRoute == '/skills' ? 'underline' : 'none'}
                            fontWeight={currentRoute == '/skills'?'semibold':'normal'}
                            textDecorationThickness={'2px'}
                            >
                                Skills
                            </MenuItem>
                            <MenuItem
                            as={NextLink}
                            href={'/contact'} 
                            passHref 
                            aria-label='Contact Me'
                            textDecor={currentRoute == '/contact' ? 'underline' : 'none'}
                            fontWeight={currentRoute == '/contact'?'semibold':'normal'}
                            textDecorationThickness={'2px'}
                            >
                                Contact Me
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Container>
                <Container
                as={'section'} 
                maxW={'none'} 
                w={'60%'}
                h={'100%'} 
                m={0}
                p={0}
                display={{
                    base: 'none',
                    md: 'inline-flex',
                    xl: 'inline-flex'
                }}
                alignItems={'center'}
                justifyContent={'flex-end'}
                >
                    

                    <Breadcrumb 
                    separator={'>'} 
                    mr={'2rem'}                
                    fontSize={'lg'}
                    >
                        <BreadcrumbItem >
                            <BreadcrumbLink 
                            as={NextLink}
                            passHref
                            href='/'
                            textDecor={currentRoute == '/' ? 'underline' : 'none'}
                            fontWeight={currentRoute == '/'?'semibold':'normal'}
                            textDecorationThickness={'2px'}
                            textUnderlineOffset={'.3rem'}
                            >
                                Start
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink 
                            as={NextLink}
                            href='/skills'
                            passHref
                            textDecor={currentRoute == '/skills' ? 'underline' : 'none'}
                            fontWeight={currentRoute == '/skills'?'semibold':'normal'}
                            textDecorationThickness={'2px'}
                            textUnderlineOffset={'.3rem'}
                            >
                                Skills
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink
                            as={NextLink}
                            href='/contact'
                            passHref
                            textDecor={currentRoute == '/contact' ? 'underline' : 'none'}
                            fontWeight={currentRoute == '/contact'?'semibold':'normal'}
                            textDecorationThickness={'2px'}
                            textUnderlineOffset={'.3rem'}
                            whiteSpace={'nowrap'}
                            >
                                Contact Me
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <ThemeTogglerButton/>
                </Container>
            </Container>
        </Box>
    )
}
export default Nav