import React from 'react';
import {
  Box, Text, BoxProps, Image,
} from '@chakra-ui/react';
import imgLogo from '../../assets/logo-blank.png';

const Logo: React.FC<BoxProps> = (props) => (
  <Box {...props}>
    <Image src={imgLogo} alt="ASN" />
  </Box>
);

export default Logo;
