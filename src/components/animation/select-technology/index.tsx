import { Flex, FlexProps } from '@chakra-ui/react';
import React, { useState, useCallback } from 'react';

import BoxDrag from './BoxDrag';
import Container from './Container';

import './styles.css';

const SelectTechnology: React.FC<FlexProps> = ({ ...rest }) => {
  const [count, setCount] = useState(0);

  return (
    <Flex
      minH="20vh"
      minW="30vw"
      {...rest}
    >
      <div className="example-container">
        <Container key={count} />
      </div>
    </Flex>
  );
};

export default SelectTechnology;
