import React from 'react';
import {
  Stack,
  Heading,
  RadioGroup,
  Radio,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react';
import { HexColorPicker } from 'react-colorful';

const SearchBarSettings = ({
  engine,
  setEngine,
  searchColor,
  setSearchColor,
}) => {
  return (
    <Stack spacing="2">
      <Heading size="md">Search</Heading>
      <Stack spacing="6">
        <RadioGroup display="flex" gap="4" defaultValue={engine}>
          <Radio
            value="http://google.com/search"
            onChange={() => {
              setEngine('http://google.com/search');
            }}
          >
            Google
          </Radio>
          <Radio
            value="https://duckduckgo.com/?q="
            onChange={() => {
              setEngine('https://duckduckgo.com/?q=');
            }}
          >
            DuckDuckGo
          </Radio>
        </RadioGroup>
        <Popover placement="left">
          <PopoverTrigger>
            <Button>Select Color</Button>
          </PopoverTrigger>
          <PopoverContent w="230px" bg="#00000030" backdropFilter="blur(8px)">
            <PopoverArrow bg="#00000030" />
            <PopoverBody display="flex" justifyContent="center">
              <HexColorPicker
                color={searchColor}
                onChange={color => setSearchColor(color)}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Stack>
    </Stack>
  );
};

export default SearchBarSettings;
