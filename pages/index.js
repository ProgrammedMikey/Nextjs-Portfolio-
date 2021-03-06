import NextLink from 'next/link'
import {
    Button, 
    Container, 
    Box, 
    Heading,
    Image,
    Link, 
    List,
    ListItem,
    SimpleGrid,
    Icon,
    useColorModeValue 
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub } from 'react-icons/io5'

const Page = () => {
    return(
    <Layout>
        <Container> 
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Central Florida! 
            </Box>
            
            <Box display={{ md: 'flex' }}> 
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Michael Da Silva
                    </Heading>
                    <p>Digital Craftsman ( Developer / Designer ) </p>
                </Box>
                <Box flexShrink={0}
                    mt={{base: 4, md: 0}}
                    ml={{md: 6}} 
                    align="center"
                >
                    <Image borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block" 
                        borderRadius="full" 
                        src="/images/dasilva.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                Work 
                </Heading>
                <Paragraph>Michael Da Silva is a freelance and a full-stack developer 
                based in Central Florida with a passion for building digital services/stuff he wants. 
                He has a knack for all things launching products, from planning and designing all the way 
                to solving real-life problems with code. When not online, he loves hanging out with his camera. 
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                         <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                          My Portfolio
                         </Button>
                    </NextLink>
                </Box>
            </Section>
            
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio 
                </Heading>
                <BioSection>
                    <BioYear>1990</BioYear>
                    Born in Queens, New York.
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    Completed the Bachelors Program in Information Technology at Florida Tech College
                </BioSection>
            </Section>
            
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    ???
                </Heading>
                <Paragraph>
                    Art, Music,{' '}
                    Drawing, Playing Drums, Machine Learning
                </Paragraph>
            </Section>
            
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                On the Web 
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/programmedmikey" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                            @programmedmikey
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    </Layout>
    )
}

export default Page