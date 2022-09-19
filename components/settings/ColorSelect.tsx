import React from 'react';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Box,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons/';
import { HexColorPicker } from 'react-colorful';

const ColorSelect = ({ color, setColor, title }) => {
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button display='flex' gap='2'>
          <EditIcon />
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent w='230px' bg='#00000030' backdropFilter='blur(8px)'>
        <PopoverArrow bg='#00000030' />
        <PopoverBody display='flex' justifyContent='center' p='4'>
          <HexColorPicker color={color} onChange={(color) => setColor(color)} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ColorSelect;
