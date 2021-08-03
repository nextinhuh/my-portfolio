import React from 'react';
import {
  Avatar, Box, Button, Flex, Heading, Stack, Text, useDisclosure, Wrap, WrapItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import backgroundImg from '../../assets/1335951.jpg';

import { Title } from './style';
import LandingLayout from '../../components/layouts/LandingLayout';
import Hero from '../../components/sections/Hero';

const Dashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <LandingLayout>
      <Hero
        title="Build this rad landing page from scratch"
        subtitle="This is the subheader section where you describe the basic benefits of your product"
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Create your account now"
        ctaLink="/signup"
      />
    </LandingLayout>
  );
};

export default Dashboard;
