import React from 'react';
import {
  HStack, Divider, Text, StackProps,
} from '@chakra-ui/react';

interface SubtitleProps extends StackProps {
  text: string;
  color?: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ text, color, ...rest }) => (
  <HStack spacing={['3', '5']} w="60vw" {...rest}>
    <Divider borderColor="white" />
    <Text fontSize={35} fontWeight="bold" textAlign="center" color={color}>{text}</Text>
    <Divider borderColor="white" />
  </HStack>
);

export default Subtitle;
