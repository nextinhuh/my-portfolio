import React from 'react';
import {
  Box, Flex, Button, FlexProps,
} from '@chakra-ui/react';
import Logo from '../ui/Logo';
import MenuItem from '../ui/MenuItem';
import CloseIcon from '../icons/CloseIcon';
import MenuIcon from '../icons/MenuIcon';

const Header: React.FC<FlexProps> = (props) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      <Flex align="center">
        <Logo
          w="100px"
          color={['white', 'white', 'primary.500', 'primary.500']}
        />
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <MenuItem to="/">HOME</MenuItem>
          <MenuItem to="/">SOBRE MIM</MenuItem>
          <MenuItem to="/how">SERVIÇOS </MenuItem>
          <MenuItem to="/faetures">PORTFOLIO </MenuItem>
          <MenuItem to="/signup" isLast>CONTATOS</MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;
