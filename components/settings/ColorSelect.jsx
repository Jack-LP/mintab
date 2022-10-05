import React, { useState } from 'react';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import { HexColorPicker } from 'react-colorful';

const ColorSelect = ({ title }) => {
  const [color, setColor] = useState('#ffffff');

  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button flex gap='2'>
          <EditIcon />
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent w='230px' bg='#00000030' backdropFilter='blur(8px)'>
        <PopoverArrow bg='#00000030' />
        <PopoverBody display='flex' justifyContent='center'>
          <HexColorPicker color={color} onChange={setColor} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ColorSelect;
