import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Inkdrop">
            <Container>
                <Title>
                Test Work <Badge> 2021 </Badge>
                </Title>
                <P>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.test.com/">
                        https://www.test.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta> Platform </Meta>
                        <span> Web </span>
                    </ListItem>
                    <ListItem>
                        <Meta> Stack</Meta>
                        <span> NodeJS, React, NextJS </span>
                    </ListItem>
                    <ListItem>
                        <Meta>BlogPost</Meta>
                        <Link href="https://blog.test.com/123">
                            This is Title Area for Blog Post <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                
                <WorkImage src="/images/works/workTest.jpg" alt="workTest" />
                <WorkImage src="/images/works/testTwp.jpg" alt="workTest2" />
            </Container>
        </Layout>
    )
}