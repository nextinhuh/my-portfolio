import React, { useCallback, useRef, useState } from 'react';
import {
  Box, BoxProps, Flex, Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Container: React.FC = () => {
  const constraintsRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleDragBox = useCallback((x: any, y: any) => {
    console.log(`vetor x ${x}`);
    console.log(`vetor y ${y}`);
  }, []);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div
        drag
        dragConstraints={constraintsRef}
        onDrag={(event, info) => handleDragBox(info.point.x, info.point.y)}
      />
    </>
  );
};

export default Container;
