import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

const ServicesIcon : React.FC<IconProps> = (props) => {
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
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
      <line x1="6" y1="6" x2="6.01" y2="6"></line>
      <line x1="6" y1="18" x2="6.01" y2="18"></line>
    </Icon>
  );
};

export default ServicesIcon;
