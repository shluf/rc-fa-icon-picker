export type IconType = 'fas' | 'far' | 'fab';

export interface FontAwesomeIconData {
  name: string;
  iconName: string;
  type: IconType;
}

export interface IconData {
    icon: string;
    type: string;
    color: string;
}
  
export interface ColorPalette {
    name: string;
    colors: string[];
}

export interface ColorScheme {
    primary: string;
    secondary: string;
    tertiary: string;
    background: string;
    backgroundSecondary: string;
    text: string;
    textSecondary: string;
    border: string;
    hover: string;
    active: string;
    disabled: string;
    focus: string;
    selected: string;
    error: string;
    success: string;
}

export type PreviewPosition = 'left' | 'right' | 'top' | 'none';
export type Size = 'sm' | 'md' | 'lg' | 'xl';
