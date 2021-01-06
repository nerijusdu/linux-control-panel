import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

const HomeIcon : React.FC<IconProps> = (props) => {
  return (
    <Icon
      viewBox="0 0 24 24"
      color="currentcolor"
      fill="none"
      stroke="currentcolor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </Icon>
  );
};

export default HomeIcon;
