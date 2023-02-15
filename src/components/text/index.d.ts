/**
 * IMPORTS
 */

import { TextProps } from 'react-native';

interface ITextProps extends TextProps {
  text?: string;
  width?: number;
  size?: number;
  color?: string;
  align?: 'center' | 'left' | 'right';
  padding?: number;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
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
