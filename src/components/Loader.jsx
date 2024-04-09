import React from 'react';
import Icon from './Icon';

const Loader = ({size=20, color='#7c3aed'}) => {
  return (
    <Icon name="LoaderCircle" size={size} className="animate-spin" color={color}/>
  )
}

export default Loader;