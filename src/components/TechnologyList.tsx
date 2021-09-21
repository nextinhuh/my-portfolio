import React from 'react';
import { HStack, ListProps } from '@chakra-ui/react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Item from './Item';

interface Technology {
  name: string;
  description: string;
  logo: string;
}

interface TechnologyListProps extends ListProps {
  techList: Technology[];
}

const TechnologyList: React.FC<TechnologyListProps> = (
  { techList, ...rest }: TechnologyListProps,
) => {
  const MotionHStack = motion(HStack);
  return (
    <AnimateSharedLayout>
      <MotionHStack
        spacing={['6', '8']}
        w="95vw"
        h="40vh"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        {techList.map((item) => (
          <Item tech={item} key={item.name} />
        ))}
      </MotionHStack>
    </AnimateSharedLayout>
  );
};

export default TechnologyList;
