import { Icon } from '@chakra-ui/react';
import { useState } from 'react';
import {
  AiFillHome,
} from 'react-icons/ai';
import {
  FiCheckSquare,
  FiHelpCircle,
} from 'react-icons/fi';
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from 'react-icons/ri';
import logoBrand from '../../assets/logo-brand.svg';
import {
  Container, Logo, NavContainer, NavItemList, NavList, NavTitle, Title, ToggleButton,
} from './styles';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleMenuOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <Container isOpened={isOpen}>
      <ToggleButton onClick={handleToggleMenuOpen}>
        <Icon as={isOpen ? RiArrowLeftSLine : RiArrowRightSLine} fontSize="30" />
      </ToggleButton>

      <Logo isOpened={isOpen} src={logoBrand} alt="Álvaro Neto" />

      <Title isOpened={isOpen}>Álvaro Neto</Title>

      <NavContainer isOpened={isOpen}>
        <NavTitle isOpened={isOpen}>Menu</NavTitle>

        <NavList isOpened={isOpen}>
          <NavItemList
            activeClass="active"
            to="header"
            spy
            smooth
            duration={500}
            isOpened={isOpen}
          >
            <Icon as={AiFillHome} fontSize="22" mr={3} />

            <span>Home</span>
          </NavItemList>

          <NavItemList
            activeClass="active"
            to="skills"
            spy
            smooth
            duration={500}
            isOpened={isOpen}
          >
            <Icon as={FiCheckSquare} fontSize="22" mr={3} />

            <span>Skills and Jobs</span>
          </NavItemList>

          <NavItemList
            activeClass="active"
            to="contact"
            spy
            smooth
            duration={500}
            isOpened={isOpen}
          >
            <Icon as={FiHelpCircle} fontSize="22" mr={3} />
            <span>About me</span>
          </NavItemList>
        </NavList>
      </NavContainer>
    </Container>
  );
}
