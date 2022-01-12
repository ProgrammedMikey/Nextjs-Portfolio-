import {Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBlogTest from '../public/images/contents/blogTest.jpg'

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular Posts
            </Heading>
            
            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="My Blog Area" 
                        thumbnail={thumbBlogTest} 
                        href="hhtp://www.youtube.com"
                    />
                    <GridItem 
                        title="My Blog Area" 
                        thumbnail={thumbBlogTest} 
                        href="hhtp://www.youtube.com"
                    />
                </SimpleGrid>
            </Section>
               <Section delay={0.5}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem 
                        title="My Blog Area" 
                        thumbnail={thumbBlogTest} 
                        href="hhtp://www.youtube.com"
                    />
                    <GridItem 
                        title="My Blog Area" 
                        thumbnail={thumbBlogTest} 
                        href="hhtp://www.youtube.com"
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)