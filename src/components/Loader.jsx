import React from 'react';
import Icon from './Icon';

const Loader = ({size=20}) => {
  return (
    <Icon name="LoaderCircle" size={size} className="animate-spin" />
  )
}

export default Loader;