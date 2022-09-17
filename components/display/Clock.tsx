import React, { useEffect, useState } from 'react';
import { Text, Spinner } from '@chakra-ui/react';

const Clock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date: Date = new Date();
      setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    }, 1000);
  }, []);

  return time ? <Text fontSize='4xl'>{time}</Text> : <Spinner />;
};

export default Clock;
