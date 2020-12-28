import React from 'react';
import classnames from 'classnames';
import { tuple } from '../_util/type';

const MenuModes = tuple('horizontal', 'vertical');
type MenuMode = typeof MenuModes[number];
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: (selectedIndex: number) => void;
}

const Menu: React.FC<MenuProps> = props => {
    const { className, mode, style, children, defaultIndex } = props;
    const classes = classnames('newa-menu', className, {
      'menu-vertical': mode === 'vertical'
    });
    return (
      <ul className={ classes } style={ style }>
        { children }
      </ul>
    );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
};

export default Menu;