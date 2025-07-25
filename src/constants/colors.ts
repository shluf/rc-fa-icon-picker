import { ColorPalette, ColorScheme } from '../types';

export const DEFAULT_COLOR_PALETTES: ColorPalette = {
  name: 'Basic',
  colors: ['#000000', '#ffffff', '#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#8b5cf6', '#ec4899']
}

export const THEME_LIGHT: ColorScheme = {
  primary: '#171717',
  secondary: '#F5F5F5',
  tertiary: '#737373',
  background: '#FFFFFF',
  backgroundSecondary: '#F5F5F5',
  text: '#0A0A0A',
  textSecondary: '#FFFFFF',
  border: '#E5E5E5',
  hover: '#F5F5F5',
  active: '#F5F5F5',
  disabled: '#A3A3A3',
  focus: '#0A0A0A',
  selected: '#F5F5F5',
  error: '#ef4444',
  success: '#22c55e',
};

export const THEME_DARK: ColorScheme = {
  primary: '#FAFAFA',
  secondary: '#262626',
  tertiary: '#A3A3A3',
  background: '#0A0A0A',
  backgroundSecondary: '#262626',
  text: '#FAFAFA',
  textSecondary: '#A3A3A3',
  border: '#262626',
  hover: '#262626',
  active: '#262626',
  disabled: '#262626',
  focus: '#D4D4D4',
  selected: '#262626',
  error: '#b91c1c',
  success: '#34d399',
};

export const THEME_BEM_UGM: ColorScheme = {
  primary: '#785A22',
  secondary: '#A68442',
  tertiary: '#D8B993',
  background: '#FDF8F3',
  backgroundSecondary: '#D8B993',
  text: '#624816',
  textSecondary: '#FFFFFF',
  border: '#BA9460',
  hover: '#8F6A39',
  active: '#624816',
  disabled: '#E6CCAF',
  focus: '#BC9A56',
  selected: '#F1E2C2',
  error: '#dc3545',
  success: '#28a745'
}