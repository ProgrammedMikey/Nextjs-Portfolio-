import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbTest from '../public/images/works/workTest.jpg'
import thumbWalknote from '../public/images/works/testTwo.jpg'

const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                <WorkGridItem id="test" title="test" thumbnail={thumbTest} >
                    Testing work section
                </WorkGridItem>
                </Section>
                
                <Section> 
                    <WorkGridItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
                        Another Test, editing later
                    </WorkGridItem>
                </Section>
                
                <Section delay={0.3}> 
                    <WorkGridItem id="test3" title="test3" thumbnail={thumbWalknote}>
                        Another Test, editing later
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works