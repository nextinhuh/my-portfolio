/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import {
  Box, Text, Icon, Flex, Stack, Divider, HStack, Grid, Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import {
  FiChevronsDown, FiFacebook, FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiMenu, FiSmartphone,
} from 'react-icons/fi';

import backgroundImage from '../../assets/back-ground.jpg';
import Item from '../../components/Item';
import TechnologyList from '../../components/TechnologyList';

import springLogo from '../../assets/spring-logo.svg';
import cegonhaLogo from '../../assets/cegonha-logo.png';
import angularLogo from '../../assets/angular-logo.svg';
import reactLogo from '../../assets/react-logo.svg';
import nodeLogo from '../../assets/node-logo.svg';
import Subtitle from '../../components/Subtitle';
import WorkGrid from '../../components/WorkGrid';

const Dashboard: React.FC = () => {
  const [gradient, setGradient] = useState('linear-gradient(90deg, rgba(94,101,156,1) 27%, rgba(168,87,87,1) 100%)');
  const [reactActive, setReactActive] = useState(false);
  const [angularActive, setAngularActive] = useState(false);
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

        <Text fontSize={40}>
          The Worst Front End Developer
        </Text>

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
              to="navigation"
              spy
              smooth
              duration={500}
            >
              <Icon as={FiChevronsDown} fontSize="35" />
            </Link>
          </ChakraLink>

        </MotionBox>

      </Box>

      <Flex
        h="10vh"
        id="navigation"
        bg="black"
        alignItems="center"
        minW={{
          base: '100%', sm: '80%', md: '100%', lg: '100%',
        }}
        justifyContent="space-between"
      >
        <ChakraLink _hover={{ color: '#5C66B8' }}>
          <Link
            activeClass="active"
            to="header"
            spy
            smooth
            duration={500}
          >
            <Text fontSize={25} fontWeight="bold" ml="20">
              Álvaro Neto
            </Text>
          </Link>
        </ChakraLink>

        <Icon as={FiMenu} fontSize="30" mr="20" />

      </Flex>

      <Box
        as="section"
        id="services"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        mt="24"
      >
        <Subtitle text="Tecnologias" />

        <TechnologyList techList={techList} />

      </Box>

      <Box
        as="section"
        id="works"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        mt="15"
      >

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
        mt="20"
        py="10"
        backgroundImage="https://technext.github.io/DarkJoe/assets/images/parallax.jpg"
        bgSize="cover"
        bgPosition="center"
        backgroundAttachment="fixed"
      >
        <Subtitle text="Heey!!" />

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
                {' '}
                Av. Belmiro Amorim, 38A, Santa Lúcia, Maceió - Alagoas, Brasil
                {' '}
              </Text>

              <Text>
                <Icon as={FiMail} fontSize="25" mr="2" />
                {' '}
                alvaroneto.dev@gmail.com
                {' '}
              </Text>

              <Text>
                <Icon as={FiSmartphone} fontSize="25" mr="2" />
                {' '}
                +55 (82) 9 9683-7371
                {' '}
              </Text>

              <Text>
                <Icon as={FiGlobe} fontSize="25" mr="2" />
                {' '}
                www.alvaroneto.com
                {' '}
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

      </Box>

      <Flex h="10vh" bgColor="black" alignItems="center" justify="space-between" p={5}>
        <Text>
          © Copyright 2021
        </Text>

        <Text>
          Tema feito por
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
        </Text>
      </Flex>
    </Box>
  );
};

export default Dashboard;
