import { ColorPalette, ColorScheme } from '../types';
import { cn } from '../lib/utils';

interface ColorPaletteProps {
  palette: ColorPalette;
  selectedColor: string;
  onColorSelect: (color: string) => void;
  colorScheme: ColorScheme;
  className?: string;
}

export function ColorPaletteSelector({
  palette,
  selectedColor,
  onColorSelect,
  colorScheme,
  className,
}: ColorPaletteProps) {
  return (
    <div className={cn('space-y-3', className)}>
      <h3 className="text-sm font-medium" style={{ color: colorScheme.text }}>
        {palette.name}
      </h3>
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          {palette.colors.map((color, index) => (
            <button
              key={index}
              onClick={() => onColorSelect(color)}
              className={cn(
                'w-8 h-8 rounded-md border-2 transition-all hover:scale-110 cursor-pointer',
                selectedColor === color ? 'ring-2 ring-offset-1' : ''
              )}
              style={{
                backgroundColor: color,
                borderColor: selectedColor === color ? colorScheme.primary : colorScheme.border,
                '--tw-ring-color': colorScheme.focus,
                '--tw-ring-offset-color': colorScheme.background
              } as React.CSSProperties}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}