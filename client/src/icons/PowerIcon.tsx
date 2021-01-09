import { Icon, IconProps } from '@chakra-ui/react';

const PowerIcon : React.FC<IconProps> = (props) => {
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
      <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
      <line x1="12" y1="2" x2="12" y2="12"></line>
    </Icon>
  );
};

export default PowerIcon;
