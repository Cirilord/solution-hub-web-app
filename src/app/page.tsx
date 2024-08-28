'use client'
import questions from '@/data/questions.json'
import services from '@/data/services.json'
import { Image } from '@chakra-ui/next-js'
import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Collapse,
    Container,
    Flex,
    Heading,
    Icon,
    ListItem,
    SimpleGrid,
    Stack,
    Text,
    UnorderedList
} from '@chakra-ui/react'
import { useState } from 'react'
import { TbPlayerPlayFilled } from 'react-icons/tb'

export type HomePageProps = {}

export default function HomePage(props: HomePageProps) {

    return (
        <main>
            <Box backgroundColor='#00000F'>
                <Container as='section' maxWidth='5xl' paddingY={12}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Stack spacing={4}>
                            <Heading as='h1' color='white' fontSize='60px'>
                                Solutions HUB - Transforme seus Dados em Resultados
                            </Heading>
                            <Text as='h2' color='#cfd0d8' fontSize='lg'>
                                Introdução à Análise de Dados para Pequenas e Médias Empresas
                            </Text>
                            <Button backgroundColor='#5a6ed8' color='#ffffff' width='130px'>
                                Saiba Mais
                            </Button>
                        </Stack>
                        <Flex>
                            <Image
                                alt='feature image'
                                height={600}
                                objectFit='cover'
                                rounded='md'
                                src='/bussines.jpg'
                                width={370}
                            />
                        </Flex>
                    </SimpleGrid>
                </Container>
            </Box>
            <Box backgroundColor='#000030' padding={4} paddingY={32}>
                <Container
                    as='section'
                    border='1px solid #6b7280'
                    backgroundColor='#000026'
                    borderRadius='lg'
                    maxWidth='6xl'
                    paddingY={12}
                    paddingX={'76px'}>
                    <Stack spacing={8}>
                        <Text as='h2' color='#ffffff' fontSize='45px' fontWeight='500' lineHeight='1.15'>
                            Por que ter Análise de Dados na sua empresa?
                        </Text>
                        <SimpleGrid columns={3} spacing={4}>
                            {
                                questions.map(question =>
                                    <Stack
                                        key={question.id}
                                        backgroundColor='#182567'
                                        borderRadius='lg'
                                        border='solid 1px rgb(49, 62, 128)'
                                        padding={4}>
                                        <Heading as='h3' color='#CFD0D8' fontSize='22px' height='55px'>
                                            {question.title}
                                        </Heading>
                                        <Text color='#CFD0D8' fontSize='18px'>
                                            {question.content}
                                        </Text>
                                    </Stack>
                                )
                            }
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>
            <Box backgroundColor='#4454A8'>
                <Container as='section' maxWidth='5xl' paddingY={12}>
                    <Stack spacing={8}>
                        <Text as='h2' color='#ffffff' fontSize='45px' fontWeight='500' lineHeight='1.15'>
                            Serviços que Oferecemos
                        </Text>
                        <SimpleGrid columns={3} spacing={4}>
                            {
                                services.map(service =>
                                    <Stack key={service.id}>
                                        <Heading as='h3' color='#CFD0D8' fontSize='22px' height='80px'>
                                            {service.title}
                                        </Heading>
                                        <Text color='#CFD0D8' fontSize='18px' height='120px'>
                                            {service.content}
                                        </Text>
                                        <UnorderedList spacing={4}>
                                            {
                                                service.items.map(item =>
                                                    <ListItem key={item.id} color='#CFD0D8'>
                                                        {item.content}
                                                    </ListItem>
                                                )
                                            }
                                        </UnorderedList>
                                    </Stack>
                                )
                            }
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>
            <Box backgroundColor='#000030' padding={4} paddingY={32}>
                <Container
                    as='section'
                    border='1px solid #6b7280'
                    backgroundColor='#000026'
                    borderRadius='lg'
                    maxWidth='6xl'
                    paddingY={12}
                    paddingX={'76px'}>
                    <Stack spacing={8}>
                        <Text as='h2' color='#ffffff' fontSize='45px' fontWeight='500' lineHeight='1.15'>
                            Transforme Seus Dados em Vantagens Competitivas
                        </Text>
                        <Text as='h3' color='#cfd0d8' fontSize='lg'>
                            Na Solutions HUB, acreditamos que cada decisão deve ser baseada em dados sólidos.
                        </Text>
                        <Accordion allowToggle>
                            <AccordionItem border={0}>
                                {({ isExpanded }) => (
                                    <>
                                        <AccordionButton padding={0}>
                                            <Icon
                                                as={TbPlayerPlayFilled}
                                                color='#cfd0d8'
                                                transform={`rotate(${isExpanded ? '90deg' : '0deg'})`}
                                            // transition='transform 2s linear'
                                            />
                                            <Text color='#cfd0d8' fontSize='lg' marginLeft={4}>
                                                Entre em Contato Conosco Hoje Mesmo!
                                            </Text>
                                        </AccordionButton>
                                        <AccordionPanel
                                            _before={{
                                                backgroundColor: '#6b7280',
                                                content: '""',
                                                height: '100%',
                                                left: 0,
                                                marginLeft: '7px',
                                                marginRight: '7px',
                                                position: 'absolute',
                                                top: 0,
                                                width: '2px'
                                            }}
                                            position='relative'
                                            paddingLeft={8}
                                            marginTop={4}>
                                            <Stack spacing={4}>
                                                <Text color='#cfd0d8'>
                                                    Quer saber como podemos ajudar sua empresa a crescer usando análise de dados?
                                                    Preencha o formulário abaixo ou entre em contato diretamente por e-mail ou
                                                    telefone. Nossos especialistas estão prontos para discutir suas necessidades
                                                    e oferecer uma solução personalizada.
                                                </Text>
                                                <UnorderedList spacing={4}>
                                                    <ListItem color='#CFD0D8'>
                                                        Telefone: (43) 9 9107-0045
                                                    </ListItem>
                                                    <ListItem color='#CFD0D8'>
                                                        E-mail: leticia@solutionshub.com.br
                                                    </ListItem>
                                                </UnorderedList>
                                            </Stack>
                                        </AccordionPanel>
                                    </>
                                )}
                            </AccordionItem>
                        </Accordion>
                    </Stack>
                </Container>
            </Box>
        </main>
    )
}