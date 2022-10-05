import React, { useState } from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Heading,
  Box,
} from '@chakra-ui/react';

const CustomSlider = ({ value, setValue, heading, background }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Box display={background === '' ? 'none' : 'block'}>
      <Heading size='sm'>{heading}</Heading>
      <Slider
        defaultValue={value * 100}
        min={0}
        max={100}
        onChange={(v) => setValue(v / 100)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        colorScheme='mint'
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          placement='top'
          isOpen={showTooltip}
          label={`${Math.floor(value * 100)}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Box>
  );
};

export default CustomSlider;
