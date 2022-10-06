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
import { EditIcon } from '@chakra-ui/icons';
import { HexColorPicker, HexColorInput } from 'react-colorful';

const ColorSelect = ({ title, color, setColor }) => {
  return (
    <Popover placement='left'>
      <PopoverTrigger>
        <Button
          display='flex'
          gap='2'
          alignItems='center'
          justifyContent='flex-start'
          cursor='pointer'
        >
          <Box w='5' h='5' bg={color} rounded='md'></Box>
          {title}
        </Button>
      </PopoverTrigger>
      <PopoverContent w='230px' bg='#00000030' backdropFilter='blur(8px)'>
        <PopoverArrow bg='#00000030' />
        <PopoverBody
          display='flex'
          flexDirection='column'
          gap='2'
          justifyContent='center'
        >
          <HexColorPicker color={color} onChange={setColor} />
          <HexColorInput
            color={color}
            onChange={setColor}
            style={{
              background: 'transparent',
              border: '1px solid #393b3b',
              textAlign: 'center',
              borderRadius: '5px',
              outline: 'none',
              padding: '2px',
              textTransform: 'uppercase',
            }}
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ColorSelect;
