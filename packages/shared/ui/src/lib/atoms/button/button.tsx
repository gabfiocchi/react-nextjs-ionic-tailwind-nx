import styles from './button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';


/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" {...props}>
      {children}
    </button>
  );
}

export default Button;
