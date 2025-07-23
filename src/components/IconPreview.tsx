import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconData, PreviewPosition, ColorScheme, IconType } from '../types';
import { getIconByName } from '../utils';
import { cn } from '../lib/utils';

interface IconPreviewProps {
  selectedIcon: IconData | null;
  position: PreviewPosition;
  colorScheme: ColorScheme;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function IconPreview({
  selectedIcon,
  position,
  colorScheme,
  className,
  size = 'lg'
}: IconPreviewProps) {
  if (position === 'none' || !selectedIcon) return null;

  const iconDef = getIconByName(selectedIcon.icon, selectedIcon.type as IconType);
  if (!iconDef) return null;

  const sizeMap = { sm: 'text-xl', md: 'text-2xl', lg: 'text-3xl', xl: 'text-4xl' };
  const positionStyles = { top: 'mb-4 text-center', left: 'mr-4 flex-shrink-0', right: 'ml-4 flex-shrink-0' };

  return (
    <div
      className={cn(
        'hidden md:flex items-center justify-center p-4 rounded-lg',
        positionStyles[position],
        sizeMap[size],
        className
      )}
      style={{
        backgroundColor: colorScheme.tertiary,
        border: `1px solid ${colorScheme.border}`,
      }}
    >
      <div className="text-center space-y-2">
        <FontAwesomeIcon
          icon={iconDef}
          style={{ color: selectedIcon.color }}
          className="block"
        />
        <div className="text-xs font-mono font-bold" style={{ color: colorScheme.text }}>
          {selectedIcon.icon}
        </div>
        <div className="text-xs font-mono" style={{ color: colorScheme.active }}>
          {selectedIcon.color}
        </div>
      </div>
    </div>
  );
}