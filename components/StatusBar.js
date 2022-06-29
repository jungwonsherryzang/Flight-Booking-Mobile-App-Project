import { StatusBar } from 'react-native';
import React from 'react';

const StatusBar = () => {
  const useIsFocused = useIsFocused();


  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default StatusBar;
