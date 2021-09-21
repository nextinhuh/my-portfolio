import React, { useState } from 'react';
import {
  ListItem, Box, Text, Image, Flex,
} from '@chakra-ui/react';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

interface Technology {
  name: string;
  description: string;
  logo: string;
}

interface ItemProps {
  tech: Technology;
}

const Item: React.FC<ItemProps> = ({ tech }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const MotionBox = motion(Box);

  return (
    <MotionBox
      onClick={toggleOpen}
      initial={{ borderRadius: 10 }}
      bg="rgba(214, 214, 214, 0.5)"
      borderRadius="10px"
      p="20px"
      overFlow="hidden"
      cursor="pointer"
    >
      <Flex alignItems="center" flexDir="column" maxH="25vh">
        <Image src={tech.logo} w="80px" h="80px" />
        <AnimatePresence>
          {isOpen && (
            <>
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >

                <Text fontSize={25} fontWeight="bold" textAlign="center">
                  {tech.name}
                </Text>
                <Text fontSize={18} fontWeight="bold" textAlign="center">
                  {tech.description}
                </Text>

              </MotionBox>
            </>
          )}
        </AnimatePresence>
      </Flex>

    </MotionBox>
  );
};

export default Item;
