import React, { useState } from 'react';
import {
  Stack,
  Heading,
  FormControl,
  Input,
  IconButton,
  UnorderedList,
  Tag,
  Tooltip,
} from '@chakra-ui/react';
import { AddIcon, DeleteIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons/';

type Props = {};

const Bookmarks = (props: Props) => {
  const [linkEntry, setLinkEntry] = useState('');

  const linkPattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );

  return <div>Bookmarks</div>;
};

export default Bookmarks;
