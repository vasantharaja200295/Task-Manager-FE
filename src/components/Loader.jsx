import React from 'react';
import Icon from './Icon';
import colors from '@/colors';

const Loader = ({size=20, color=colors.primary, white}) => {
  return (
    <Icon name="LoaderCircle" size={size} className="animate-spin" color={white?"#fff":color} />
  )
}

export default Loader;