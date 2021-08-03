import React from 'react';
import { HTMLMotionProps, motion, MotionProps } from 'framer-motion';
import { ButtonProps } from '@chakra-ui/react';

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.1 },
  pressed: { scale: 0.95 },
};
const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

interface BoxDragProps extends HTMLDivElement {
  onClick: any;
}

const BoxDrag: React.FC<any> = ({ onClick }) => (
  <motion.div
    className="refresh"
    onClick={onClick}
    variants={button}
  >
    <motion.svg
      width="160"
      height="160"
      variants={arrow}
    />
  </motion.div>
);

export default BoxDrag;
