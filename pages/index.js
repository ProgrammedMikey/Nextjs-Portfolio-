import { Container, Box } from '@chakra-ui/react'

const Page = () => {
    return(
    <Container> 
        <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
            Hello, I&apos;m a full-stack developer based in Central Florida! 
        </Box>
        
        <Box display={{ md: 'flex' }}> 
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Michael Da Silva
                </Heading>
                <p>Digital Craftsman ( Developer / Designer ) </p>
            </Box>
        </Box>
    </Container>
    )
}

export default Page