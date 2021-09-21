import React from 'react';
import { SimpleGridProps, SimpleGrid } from '@chakra-ui/react';
import { motion, AnimateSharedLayout } from 'framer-motion';
import Item from './Item';

interface Work {
  name: string;
  description: string;
  logo: string;
  link: string;
}

interface WorkListProps extends SimpleGridProps {
  workList: Work[];
}

const WorkGrid: React.FC<WorkListProps> = ({ workList, ...rest }) => {
  const MotionSimpleGrid = motion(SimpleGrid);
  return (
    <AnimateSharedLayout>
      <MotionSimpleGrid
        columns={4}
        spacing={6}
        {...rest}
      >
        {workList.map((item) => (
          <Item work={item} key={item.name} />
        ))}
      </MotionSimpleGrid>

    </AnimateSharedLayout>
  );
};

export default WorkGrid;
