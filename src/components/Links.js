import React from 'react';
import { HStack, IconButton, Box } from '@chakra-ui/react';

const Links = ({ linksArray }) => {
  const itemArray = linksArray.map(link => (
    <a
      key={link.id}
      w="100%"
      h="100%"
      href={
        link.url.includes('http://' || 'https://')
          ? link.url
          : `https://www.${link.url}`
      }
    >
      <IconButton
        variant="outline"
        size="lg"
        borderWidth="2px"
        key={link.id}
        style={{ marginInlineStart: '0' }}
      >
        <Box>
          {Array.from(
            link.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0]
          )[0].toUpperCase()}
        </Box>
      </IconButton>
    </a>
  ));

  return (
    <HStack
      gap={2}
      alignItems="center"
      maxWidth="325px"
      wrap="wrap"
      justifyContent="center"
    >
      {itemArray}
    </HStack>
  );
};

export default Links;
