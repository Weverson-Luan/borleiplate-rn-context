/**
 * IMPORTS
 */

import { TextProps } from 'react-native';

interface ITextProps extends TextProps {
  text?: string;
  width?: number | string;
  size?: number;
  color?: string;
  align?: 'center' | 'left' | 'right';
  padding?: string | number | undefined;
  marginBottom?: string | number | undefined;
  marginTop?: string | number | undefined;
  marginLeft?: string | number | undefined;
  marginRight?: string | number | undefined;
  margin?: string | number | undefined;
  textDecoration?: 'line-through' | 'underline' | 'none';
  weight?: '300' | '400' | '500' | '600' | '700';
  ellipsis?: boolean;
  fontFamily?:
    | 'Poppins-Thin'
    | 'Poppins-Light'
    | 'Poppins-ExtraLight'
    | 'Poppins_300Light'
    | 'Poppins-Regular'
    | 'Poppins-Medium'
    | 'Poppins-Bold'
    | 'Poppins-SemiBold'
    | 'Poppins-Black'
    | 'Poppins-ExtraBold';
  letterSpacing?: number;
  letterHeight?: number;
  zIndex?: number;
}

/**
 * EXPORTS
 */
export { ITextProps };
