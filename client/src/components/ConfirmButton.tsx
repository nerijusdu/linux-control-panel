import { Button, ButtonProps, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal } from "@chakra-ui/react";

type ConfirmButtonProps = ButtonProps & {
  onClick: () => void;
  message?: string;
};

const ConfirmButton : React.FC<ConfirmButtonProps> = ({ children, onClick, message, ...props }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button {...props}>
          {children}
        </Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            {message || 'Are you sure?'}
          </PopoverHeader>
          <Button colorScheme="green" onClick={onClick} m="5px">Confirm</Button>
          <PopoverCloseButton />
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default ConfirmButton;
