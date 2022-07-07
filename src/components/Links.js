import React from 'react';
import { HStack, IconButton } from '@chakra-ui/react';

const Links = ({ linksArray }) => {
  const itemArray = linksArray.map(link => (
    <IconButton
      variant="outline"
      size="lg"
      borderWidth="2px"
      key={link.id}
      style={{ marginInlineStart: '0' }}
    >
      <a
        href={
          link.url.includes('http://' || 'https://')
            ? link.url
            : `https://www.${link.url}`
        }
      >
        {Array.from(
          link.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0]
        )[0].toUpperCase()}
      </a>
    </IconButton>
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
