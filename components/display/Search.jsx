import React, { useContext, useState, useEffect } from 'react';
import SettingsContext from '../../context/SettingsContext';
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Image,
} from '@chakra-ui/react';

const Search = () => {
  const [iconDisplay, setIconDisplay] = useState();
  const { engine, setEngine } = useContext(SettingsContext);

  useEffect(() => {
    setIconDisplay(
      engine === 'http://google.com/search' ? (
        <Image
          src='img/google.svg'
          alt=''
          width='30px'
          filter='invert(1)'
          opacity='30%'
        />
      ) : (
        <Image
          src='img/duckduckgo.svg'
          alt=''
          width='30px'
          filter='invert(1)'
          opacity='30%'
        />
      )
    );
  }, [engine]);

  return (
    <form action={engine} target='_self'>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant='unstyled'
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='30px'
            onClick={() =>
              setEngine(
                engine === 'http://google.com/search'
                  ? 'https://duckduckgo.com/?q='
                  : 'http://google.com/search'
              )
            }
          >
            {iconDisplay}
          </IconButton>
        </InputRightElement>
        <Input
          minW='270px'
          variant='flushed'
          placeholder='Search'
          name='q'
          autoComplete='off'
          size='lg'
        />
      </InputGroup>
    </form>
  );
};

export default Search;
