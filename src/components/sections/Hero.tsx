import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  FlexProps,
} from '@chakra-ui/react';

interface HeroProps extends FlexProps {
  title: string;
  subtitle: string;
  image: string;
  ctaLink: string;
  ctaText: string;
}

const Hero: React.FC<HeroProps> = ({
  title = 'React landing page with Chakra UI',
  subtitle =
  'This is the subheader section where you describe the basic benefits of your product',
  image = 'https://source.unsplash.com/collection/404339/800x600',
  ctaText = 'Create your account now',
  ctaLink = '/signup',
  ...rest
}) => (
  <Flex
    align="center"
    justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
    direction={{ base: 'column-reverse', md: 'row' }}
    minH="60vh"
    px={8}
    mb={16}
    {...rest}
  >
    <Stack
      spacing={4}
      w={{ base: '80%', md: '40%' }}
      align={['center', 'center', 'flex-start', 'flex-start']}
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="cyan.50"
        textAlign={['center', 'center', 'left', 'left']}
      >
        {title}
      </Heading>

      <Heading
        as="h2"
        size="md"
        color="cyan.50"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={['center', 'center', 'left', 'left']}
      >
        {subtitle}
      </Heading>

    </Stack>
    <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
      {/* TODO: Make this change every X secs */}
      <Image src={image} size="100%" rounded="1rem" shadow="2x1" />
    </Box>

  </Flex>
);

export default Hero;
