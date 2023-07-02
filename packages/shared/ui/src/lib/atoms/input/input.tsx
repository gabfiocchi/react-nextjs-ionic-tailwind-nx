import styles from './input.module.scss';
import { InputHTMLAttributes, ReactNode } from 'react';
/* eslint-disable-next-line */
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
}

export function Input({ children, ...props }: InputProps) {
  return (
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type={props.type || 'text'} {...props} />
  );
}

export default Input;
