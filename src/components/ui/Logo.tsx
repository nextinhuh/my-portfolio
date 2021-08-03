import React from 'react';
import { Box, Text, BoxProps } from '@chakra-ui/react';

const Logo: React.FC<BoxProps> = (props) => (
  <Box {...props}>
    <Text fontSize="lg" fontWeight="bold">
      Logo
    </Text>
  </Box>
);

export default Logo;
