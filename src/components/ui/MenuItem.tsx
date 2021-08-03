import React from 'react';
import { Link } from 'react-router-dom';
import { Text, TextProps } from '@chakra-ui/react';

interface MenuItemProps extends TextProps {
  isLast?: boolean;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  children, isLast, to = '/', ...rest
}) => (
  <Text
    mb={{ base: isLast ? 0 : 8, sm: 0 }}
    mr={{ base: 0, sm: isLast ? 0 : 8 }}
    display="block"
    color="cyan.50"
    fontWeight="bold"
    {...rest}
  >
    <Link to={to}>{children}</Link>
  </Text>
);

export default MenuItem;
