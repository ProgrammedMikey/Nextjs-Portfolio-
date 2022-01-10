import NextLink from 'next/link'
import {Button, Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
    return(
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
                    src="/images/takuya.jpg"
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
    </Container>
    )
}

export default Page