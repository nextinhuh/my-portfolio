import React from 'react';
import {
  Box, BoxProps, chakra, forwardRef, HTMLChakraProps, useDisclosure,
} from '@chakra-ui/react';
import { motion, isValidMotionProp, HTMLMotionProps } from 'framer-motion';

import LandingLayout from '../../components/layouts/LandingLayout';
import Hero from '../../components/sections/Hero';
import SelectTecnology from '../../components/animation/select-technology';

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<'button'>, HTMLMotionProps<'button'>>;

const Dashboard: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  const MotionBox: React.FC<MotionBoxProps> = motion(chakra.button);
  return (
    <LandingLayout>
      <Hero
        title="Álvaro Neto"
        subtitle="Software developer, with focus in front-end"
        image="https://avatars.githubusercontent.com/u/50875570?v=4"
        ctaText="Create your account now"
        ctaLink="/signup"
      />

      <SelectTecnology bgColor="purple.700" borderRadius="base" />

    </LandingLayout>
  );
};

export default Dashboard;
