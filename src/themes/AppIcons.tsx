// @ts-nocheck

import React from 'react';
import right_arrow from '../assets/icons/right_arrow.svg';
import eye from '../assets/icons/eye.svg';

const SVGs = {
  eye,
  right_arrow,
};
export default {
  Icons: ({
    color = '#000',
    size = 22,
    name = 'locationFiled',
    width,
    height,
    style,
  }: any) => {
    if (name in SVGs) {
      const Icon = SVGs[name];
      return (
        <Icon
          style={[style, {color}]}
          name={name}
          width={width || size}
          height={height || size}
        />
      );
    } else {
      return null;
    }
  },
};
