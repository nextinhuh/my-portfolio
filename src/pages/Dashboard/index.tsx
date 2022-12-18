import {
  Box, Text, Icon, Flex, Stack, Divider, HStack, Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FiChevronsDown, FiFacebook, FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiMenu, FiSmartphone,
} from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';

import backgroundImage from '../../assets/back-ground.jpg';
import TechnologyList from '../../components/TechnologyList';

import springLogo from '../../assets/spring-logo.svg';
import cegonhaLogo from '../../assets/cegonha-logo.png';
import angularLogo from '../../assets/angular-logo.svg';
import reactLogo from '../../assets/react-logo.svg';
import nodeLogo from '../../assets/node-logo.svg';
import Subtitle from '../../components/Subtitle';
import WorkGrid from '../../components/WorkGrid';
import { Sidebar } from '../../components/Sidebar';

export function Dashboard() {
  const MotionBox = motion(Box);
  const techList = [
    {
      name: 'Angular',
      description: 'Web Front-end language',
      logo: angularLogo,
    },
    {
      name: 'React',
      description: 'Web and Mobile Front-end Framework',
      logo: reactLogo,
    },
    {
      name: 'Node',
      description: 'Engine for JavaScript',
      logo: nodeLogo,
    },
    {
      name: 'Java Spring-boot',
      description: 'Framework using Java',
      logo: springLogo,
    },
  ];

  const workList = [
    {
      name: 'Gobarber Web',
      description: 'Projeto criado para fins educacionais no curso Bootcamp da Rocktseat',
      logo: 'https://gobarberweb.alvaroneto.com/static/media/logo.a49b07ec.svg',
      link: 'https://gobarberweb.alvaroneto.com/',
    },
    {
      name: 'ig.news',
      description: 'Projeto criado para fins educacionais no curso Ignite da Rocktseat',
      logo: 'https://ignews.alvaroneto.com/images/avatar.svg',
      link: 'https://ignews.alvaroneto.com/',
    },
    {
      name: 'App Cegonha',
      description: 'Projeto mobile feito com React Native',
      logo: cegonhaLogo,
      link: 'https://github.com/nextinhuh/app-prenatal',
    },
    {
      name: 'Complaint API',
      description: 'API feita com NojeJS',
      logo: nodeLogo,
      link: 'https://github.com/nextinhuh/complaint-service',
    },
  ];

  return (
    <>
      <Sidebar />
      <Box>
        <Box
          as="header"
          id="header"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          h="100vh"
          backgroundImage={backgroundImage}
          bgSize="cover"
          bgPosition="center"
          backgroundAttachment="fixed"
          minW={{
            base: '100%', sm: '80%', md: '100%', lg: '100%',
          }}
        >
          <Text fontSize={85} fontWeight="bold">
            Álvaro Neto
          </Text>

          <TypeAnimation
            sequence={[
              'The', // Types 'One'
              1000, // Waits 1s
              'The Front-end Developer', // Deletes 'One' and types 'Two'
              3000, // Waits 2s
              'The DevOps', // Types 'Three' without deleting 'Two'
              3000,
              'An Eternal Student',
              5000,
            ]}
            wrapper="div"
            cursor
            repeat={Infinity}
            style={{ fontSize: '2.5em' }}
          />

          <MotionBox
            mt="6"
            animate={{
              scale: [1, 1.2, 1.5, 1.2, 1],
            }}
            transition={{
              duration: 1,
              ease: 'linear',
              loop: Infinity,
              repeatDelay: 0.8,
            }}
          >
            <ChakraLink _hover={{ color: '#5C66B8' }}>
              <Link
                activeClass="active"
                to="skills"
                spy
                smooth
                duration={500}
              >
                <Icon as={FiChevronsDown} fontSize="35" />
              </Link>
            </ChakraLink>
          </MotionBox>
        </Box>

        <Box
          as="section"
          id="skills"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          mt="24"
          h="100vh"
        >
          <Subtitle text="Tecnologias" />

          <TechnologyList techList={techList} />

          <Subtitle text="Meus Trabalhos" />

          <WorkGrid workList={workList} mt="10" />
        </Box>

        <Box
          as="section"
          id="contact"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          backgroundImage="https://technext.github.io/DarkJoe/assets/images/parallax.jpg"
          bgSize="cover"
          bgPosition="center"
          backgroundAttachment="fixed"
          h="100vh"
        >
          <Stack spacing={10}>
            <Subtitle text="Heey!!" mt="10" />

            <Flex justifyContent="space-between" w="60vw" spacing={40} mt="10">
              <Box w="40%">
                <Text fontSize={25} textAlign="left" mb="10">
                  Mais sobre mim
                </Text>

                <Text fontSize={18} textAlign="left">
                  Comecei a programar a 5 anos atrás, terminei a faculdade,
                  e venho estudando e trabalhando,
                  com desenvolvimento de aplicações utilizando as tecnologias
                  AngularJS e ReactJS, como também APIs com nodeJS + express,
                  utilizando TypeScript,
                  utilizando banco de dados como PostgreSQL, MongoDB. Tenho experiência
                  utilizando TypeORM e docker.
                </Text>
              </Box>

              <Box w="40%">
                <Text fontSize={25} mb="10">
                  Contatos
                </Text>

                <Stack spacing={5}>
                  <Text>
                    <Icon as={FiMapPin} fontSize="25" mr="2" />
                    Av. Belmiro Amorim, 38A, Santa Lúcia, Maceió - Alagoas, Brasil
                  </Text>

                  <Text>
                    <Icon as={FiMail} fontSize="25" mr="2" />
                    alvaroneto.dev@gmail.com
                  </Text>

                  <Text>
                    <Icon as={FiSmartphone} fontSize="25" mr="2" />
                    +55 (82) 9 9683-7371
                  </Text>

                  <Text>
                    <Icon as={FiGlobe} fontSize="25" mr="2" />
                    www.alvaroneto.com
                  </Text>
                </Stack>
              </Box>
            </Flex>

            <Flex w="100" flexDir="column" alignItems="center" justify="center" mt="10">
              <Text fontWeight="bold" fontSize="30">
                Me encontre em
              </Text>

              <Divider my="3" />

              <HStack spacing={5}>
                <ChakraLink href="https://web.facebook.com/alvaro.neto.50" _hover={{ color: '#5C66B8' }} isExternal>
                  <Icon as={FiFacebook} fontSize="35" mr="2" />
                </ChakraLink>

                <ChakraLink href="https://www.linkedin.com/in/álvaro-neto-932492127/" _hover={{ color: '#0e76a8' }} isExternal>
                  <Icon as={FiLinkedin} fontSize="35" mr="2" />
                </ChakraLink>

                <ChakraLink href="https://github.com/nextinhuh" _hover={{ color: 'black' }} isExternal>
                  <Icon as={FiGithub} fontSize="35" mr="2" />
                </ChakraLink>
              </HStack>
            </Flex>
          </Stack>

          <Flex position="relative" top={116} h="10vh" w="100%" bgColor="rgba(10, 10, 10, .55)" alignItems="center" justify="center" mt={10}>
            <HStack spacing={2}>
              <Text>Tema feito por</Text>

              <ChakraLink _hover={{ color: '#5C66B8' }}>
                <Link
                  activeClass="active"
                  to="header"
                  spy
                  smooth
                  duration={500}
                >
                  <Text fontWeight="bold">
                    Álvaro Neto
                  </Text>
                </Link>
              </ChakraLink>

              <Text>| © Copyright 2022</Text>
            </HStack>
          </Flex>
        </Box>
      </Box>
    </>

  );
}
