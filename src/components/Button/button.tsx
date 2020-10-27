import React from 'react';
import classnames from 'classnames';
import { tuple, Omit } from '../_util/type';

const ButtonTypes = tuple('primary', 'default', 'danger', 'link', 'ghost');
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
const SizeType = tuple('small', 'large');
export type ButtonSize = typeof SizeType[number];
export type ButtonType = typeof ButtonTypes[number];
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
  // 类名
  className?: string;
  // 是否禁用按钮
  disabled?: boolean;
  // 按钮大小
  size?: ButtonSize;
  // 按钮类型
  type?: ButtonType;
  // 子元素
  children?: React.ReactNode;
  // 链接地址
  href?: string;
  // 是否 block
  block?: boolean;
  // TODO
  // 是否显示loading
  loading?: boolean;
  // 是否 ghost
  ghost?: boolean;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
  
export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button: React.FC<ButtonProps> = props => {
  const {
    className,
    disabled,
    size,
    type,
    children,
    href,
    block,
    loading,
    ghost,
    ...restProps
  } = props;
  // button, button-large, button-primary
  const classes = classnames('button', className, {
    [`button-${type}`]: type,
    [`button-${size}`]: size,
    'button-block': block,
    'button-loading': loading,
    'button-ghost': ghost,
    'disabled': type === 'link' && disabled
  })

  const { htmlType, ...otherProps } = restProps as NativeButtonProps;

  return type === 'link'
  ? <a
    className={classes}
    href={href}
    {...(otherProps as NativeButtonProps)}>
      { children }
    </a>
  : <button
    {...(otherProps as NativeButtonProps)}
    className={classes}
    type={htmlType}
    disabled={disabled}
    >
      { children }
    </button>
}

Button.defaultProps = {
  disabled: false,
  type: 'default',
  ghost: false,
  loading: false,
  block: false,
  htmlType: 'button' as ButtonProps['htmlType'],
}

export default Button;