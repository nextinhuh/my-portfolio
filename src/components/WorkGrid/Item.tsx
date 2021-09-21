import React, { useState } from 'react';
import {
  Box, Image, Flex, Link,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface Work {
  name: string;
  description: string;
  logo: string;
  link: string;
}

interface ItemProps {
  work: Work;
}

const Item: React.FC<ItemProps> = ({ work }: ItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const MotionBox = motion(Box);

  return (
    <Link href={work.link} isExternal>
      <MotionBox
        onClick={toggleOpen}
        initial={{ borderRadius: 10 }}
        bg="rgba(214, 214, 214, 0.5)"
        borderRadius="10px"
        p="20px"
        overFlow="hidden"
        cursor="pointer"
      >
        <Flex alignItems="center" flexDir="column">
          <Image src={work.logo} w="80px" h="80px" />
        </Flex>
      </MotionBox>
    </Link>
  );
};

export default Item;
