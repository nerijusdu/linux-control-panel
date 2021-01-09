import { Icon, IconProps } from '@chakra-ui/react';

const PlayIcon : React.FC<IconProps> = (props) => {
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
      <polygon points="5 3 19 12 5 21 5 3"></polygon>
    </Icon>
  );
};

export default PlayIcon;
