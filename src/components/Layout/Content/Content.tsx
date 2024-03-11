import React from 'react';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column';
  width?: 's' | 'm' | 'l' | 'fluid';
  padding?: boolean;
  style?: any;
}

export default ({ direction = 'column', padding = false, width = 'l', className, children, style }: Props) => {
  return (
    <div className={classNames(className, 'content', `content--${[direction]}`, { 'content--padding': padding }, [`content--width--${width}`])} style={style}>
      {children}
    </div>
  );
};
