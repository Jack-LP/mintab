import React from 'react';
import { HStack, IconButton, Box, Image } from '@chakra-ui/react';

const LinkInitial = ({ link }) => {
  return (
    <Box>
      {Array.from(
        link.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('.')[0]
      )[0].toUpperCase()}
    </Box>
  );
};

const Links = ({ linksArray, useIcon }) => {
  const itemArray = linksArray.map(link => (
    <a
      key={link.id}
      href={
        link.url.includes('http://' || 'https://')
          ? link.url
          : `https://www.${link.url}`
      }
      style={{ margin: '0' }}
    >
      <IconButton variant="outline" size="lg" borderWidth="2px" key={link.id}>
        {useIcon ? (
          <Image
            src={`https://icon.horse/icon/${link.url}`}
            boxSize="60%"
          ></Image>
        ) : (
          <LinkInitial link={link} />
        )}
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
