import React from 'react';
import { HStack, Divider, Text } from '@chakra-ui/react';

interface SubtitleProps {
  text: string;
  color?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color }) => (
  <HStack spacing={['3', '5']} w="60vw">
    <Divider borderColor="white" />
    <Text fontSize={35} fontWeight="bold" textAlign="center" color={color}>{text}</Text>
    <Divider borderColor="white" />
  </HStack>
);

export default Subtitle;
