import { Icon, IconProps } from '@chakra-ui/react';

const ReloadIcon : React.FC<IconProps> = (props) => {
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
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </Icon>
  );
};

export default ReloadIcon;
