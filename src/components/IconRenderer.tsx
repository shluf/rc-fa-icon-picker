import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getIconByName } from '../utils';
import { cn } from '../lib/utils';
import { IconType } from '../types';

export interface IconRendererProps {
  iconName: string;
  iconType?: string;
  color?: string;
  size?: 'xs' | 'sm' | 'lg' | 'xl' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  
  // FontAwesome specific props
  spin?: boolean;
  pulse?: boolean;
  border?: boolean;
  fixedWidth?: boolean;
  inverse?: boolean;
  flip?: 'horizontal' | 'vertical' | 'both';
  rotation?: 90 | 180 | 270;
  pull?: 'left' | 'right';
  beat?: boolean;
  fade?: boolean;
  beatFade?: boolean;
  bounce?: boolean;
  shake?: boolean;
  title?: string;
}

export function IconRenderer({
  iconName,
  iconType = 'solid',
  color = '#000000',
  size,
  className,
  style = {},
  onClick,
  spin = false,
  pulse = false,
  border = false,
  fixedWidth = false,
  inverse = false,
  flip,
  rotation,
  pull,
  beat = false,
  fade = false,
  beatFade = false,
  bounce = false,
  shake = false,
  title,
}: IconRendererProps) {
  const iconDef = getIconByName(iconName, iconType as IconType);

  if (!iconDef) {
    return (
      <div
        className={cn(
          'inline-flex items-center justify-center w-4 h-4 bg-gray-200 rounded text-gray-400 text-xs',
          className
        )}
        style={style}
        title="Icon not found"
      >
        ?
      </div>
    );
  }

  return (
    <FontAwesomeIcon
      icon={iconDef}
      size={size}
      className={className}
      style={{ color, ...style }}
      onClick={onClick}
      spin={spin}
      pulse={pulse}
      border={border}
      fixedWidth={fixedWidth}
      inverse={inverse}
      flip={flip}
      rotation={rotation}
      pull={pull}
      beat={beat}
      fade={fade}
      beatFade={beatFade}
      bounce={bounce}
      shake={shake}
      title={title}
    />
  );
}