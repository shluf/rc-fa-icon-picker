import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, ModalContent, ModalHeader, ModalTitle, ModalFooter } from './ui/modal';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ColorPaletteSelector } from './ColorPalette';
import { IconPreview } from './IconPreview';
import { IconData, FontAwesomeIconData, ColorPalette, PreviewPosition, ColorScheme } from '../types';
import { DEFAULT_COLOR_PALETTES, THEME_DARK, THEME_LIGHT, THEME_BEM_UGM } from '../constants/colors';
import { getIconByName } from '../utils';
import { cn } from '../lib/utils';
import iconsJson from '../data/fontawesome-icons.json';
import { IconType } from '../types';

export interface IconPickerProps {
  defaultIcon?: string;
  defaultType?: string;
  defaultColor?: string;
  onSelect: (data: IconData) => void;
  trigger?: React.ReactNode;
  triggerClassName?: string;
  triggerText?: string;
  title?: string;
  previewPosition?: PreviewPosition;
  previewSize?: 'sm' | 'md' | 'lg' | 'xl';
  colorscheme?: 'dark' | 'light' | 'bemUgm';
  columns?: number;
  iconSize?: string;
  maxHeight?: string;
  showSearch?: boolean;
  showColorPicker?: boolean;
  showColorPalette?: boolean;
  showPreview?: boolean;
  colorPalettes?: ColorPalette;
  searchPlaceholder?: string;
  saveText?: string;
  cancelText?: string;
  className?: string;
  modalClassName?: string;
  gridClassName?: string;
  searchClassName?: string;
}

export function IconPicker({
  defaultIcon,
  defaultType = 'fas',
  defaultColor = '#000000',
  onSelect,
  trigger,
  triggerClassName,
  triggerText = 'Select Icon',
  title = 'Select an Icon',
  previewPosition = 'left',
  previewSize = 'lg',
  colorscheme = 'light',
  columns = 6,
  iconSize = '20px',
  maxHeight = '300px',
  showSearch = true,
  showColorPicker = true,
  showColorPalette = true,
  showPreview = true,
  colorPalettes = DEFAULT_COLOR_PALETTES,
  searchPlaceholder = 'Search icons...',
  saveText = 'Select',
  cancelText = 'Cancel',
  className,
  modalClassName,
  gridClassName,
  searchClassName,
}: IconPickerProps) {
  const [open, setOpen] = useState(false);
  const [icons, setIcons] = useState<FontAwesomeIconData[]>([]);
  const [search, setSearch] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);
  const [iconColor, setIconColor] = useState(defaultColor);

  const [selectedIconType, setSelectedIconType] = useState<'all' | 'fas' | 'fab' | 'far' >('all');

  const colorScheme: ColorScheme = colorscheme === 'dark' ? THEME_DARK : colorscheme === 'light' ? THEME_LIGHT : THEME_BEM_UGM;

  useEffect(() => {
    const typedIcons = iconsJson as FontAwesomeIconData[];
    setIcons(typedIcons);

    if (defaultIcon) {
      const icon = typedIcons.find((i) => i.name === defaultIcon);
      if (icon) {
        setSelectedIcon({
          icon: icon.name,
          type: defaultType,
          color: defaultColor,
        });
      }
    }
  }, [defaultIcon, defaultType, defaultColor]);

  const filteredIcons = icons.filter((icon) => {
    if (selectedIconType === 'all') {
      return icon.iconName.toLowerCase().includes(search.toLowerCase());
    }
    return icon.type === selectedIconType && icon.iconName.toLowerCase().includes(search.toLowerCase());
  });

  const handleSave = () => {
    if (selectedIcon) {
      onSelect({
        ...selectedIcon,
        color: iconColor,
      });
      setOpen(false);
    }
  };

  const handleIconTypeSelect = (type: 'all' | 'fas' | 'fab' | 'far') => {
    setSelectedIconType(type);
  };

  const handleIconSelect = (icon: FontAwesomeIconData) => {
    setSelectedIcon({
      icon: icon.name,
      type: icon.type,
      color: iconColor,
    });
  };

  const currentSelectedIcon = selectedIcon ? { ...selectedIcon, color: iconColor } : null;

  const getLayoutClass = () => {
    if (!showPreview || previewPosition === 'none') return '';
    switch (previewPosition) {
      case 'left': return 'flex md:flex-row flex-col';
      case 'right': return 'flex md:flex-row-reverse flex-col';
      case 'top':
      default: return 'flex flex-col';
    }
  };

  const renderTrigger = () => {
    if (trigger) return trigger;
    return (
      <Button
        onClick={() => setOpen(true)}
        className={triggerClassName}
        variant="outline"
        style={{
          backgroundColor: colorScheme.background,
          borderColor: colorScheme.border,
          color: colorScheme.text,
        }}
      >
        {triggerText}
      </Button>
    );
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{renderTrigger()}</div>

      <Modal open={open} onOpenChange={setOpen}>
        <ModalContent
          className={cn('max-w-4xl w-full', modalClassName)}
          style={{ backgroundColor: colorScheme.background, color: colorScheme.text }}
        >
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
          </ModalHeader>

          <div className={cn(getLayoutClass(), 'gap-6')}>
            {showPreview && (
              <IconPreview
                selectedIcon={currentSelectedIcon}
                position={previewPosition}
                size={previewSize}
                colorScheme={colorScheme}
                className={previewPosition === 'left' || previewPosition === 'right' ? 'w-48' : ''}
              />
            )}

            <div className="flex-1 space-y-4">
              {showSearch && (
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={cn(
                    'focus:ring-2',
                    searchClassName
                  )}
                  style={{
                    backgroundColor: colorScheme.tertiary,
                    borderColor: colorScheme.border,
                    color: colorScheme.text,
                    '--tw-ring-color': colorScheme.focus,
                  } as React.CSSProperties}
                />
              )}

              <div className="flex gap-2">
                <Button 
                    variant="outline" 
                    onClick={() => handleIconTypeSelect('all')} 
                    className='py-1 rounded-full text-sm' 
                    style={{ 
                        backgroundColor: selectedIconType === 'all' ? 
                        colorScheme.primary : 'transparent', 
                        color: selectedIconType === 'all' ? colorScheme.textSecondary : colorScheme.text, borderColor: 
                        selectedIconType === 'all' ? colorScheme.primary : colorScheme.border 
                    }}
                >All</Button>
                <Button 
                    variant="outline" 
                    onClick={() => handleIconTypeSelect('fas')} 
                    className='py-1 rounded-full text-sm' 
                    style={{ 
                        backgroundColor: selectedIconType === 'fas' ? colorScheme.primary : 'transparent', 
                        color: selectedIconType === 'fas' ? colorScheme.textSecondary : colorScheme.text, 
                        borderColor: selectedIconType === 'fas' ? colorScheme.primary : colorScheme.border 
                    }}
                >Solid</Button>
                <Button 
                    variant="outline" 
                    onClick={() => handleIconTypeSelect('fab')} 
                    className='py-1 rounded-full text-sm' 
                    style={{ 
                        backgroundColor: selectedIconType === 'fab' ? colorScheme.primary : 'transparent', 
                        color: selectedIconType === 'fab' ? colorScheme.textSecondary : colorScheme.text, 
                        borderColor: selectedIconType === 'fab' ? colorScheme.primary : colorScheme.border 
                    }}
                >Brands</Button>
                <Button 
                    variant="outline" 
                    onClick={() => handleIconTypeSelect('far')} 
                    className='py-1 rounded-full text-sm' 
                    style={{ 
                        backgroundColor: selectedIconType === 'far' ? colorScheme.primary : 'transparent', 
                        color: selectedIconType === 'far' ? colorScheme.textSecondary : colorScheme.text, 
                        borderColor: selectedIconType === 'far' ? colorScheme.primary : colorScheme.border 
                    }}
                >Regular</Button>
              </div>

              {filteredIcons.length > 0 ? (
                <div
                  className={cn('grid gap-2 overflow-y-auto rounded-md px-3 py-3', gridClassName)}
                  style={{
                    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                    maxHeight,
                    border: `1px solid ${colorScheme.border}`,
                  }}
                >
                  {filteredIcons.map((icon) => {
                    const iconDef = getIconByName(icon.name, icon.type as IconType);
                    if (!iconDef) return null;

                    const isSelected = selectedIcon?.icon === icon.name;

                    return (
                      <button
                        key={`${icon.name}-${icon.type}`}
                        onClick={() => handleIconSelect(icon)}
                        className={cn(
                          'rounded-md py-3 transition-all flex items-center justify-center cursor-pointer',
                          `hover:bg-[${colorScheme.hover}]`,
                          isSelected
                            ? `ring-2`
                            : `border`,
                        )}
                        style={{
                           borderColor: isSelected ? colorScheme.primary : colorScheme.border,
                           backgroundColor: isSelected ? colorScheme.selected : 'transparent',
                           '--tw-ring-color': colorScheme.focus,
                        } as React.CSSProperties}
                        title={icon.iconName}
                      >
                        <FontAwesomeIcon
                          icon={iconDef}
                          style={{ color: iconColor, fontSize: iconSize }}
                        />
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center" style={{ color: colorScheme.tertiary }}>
                  No icons found
                </div>
              )}

              <div className="flex gap-4 flex-col md:flex-row">
                {showColorPalette && (
                  <div className="flex-1">
                    <ColorPaletteSelector
                      palette={colorPalettes}
                      selectedColor={iconColor}
                      onColorSelect={setIconColor}
                      colorScheme={colorScheme}
                    />
                  </div>
                )}

                {showColorPicker && (
                  <div className="space-y-2">
                    <label className="text-sm font-medium" style={{ color: colorScheme.text }}>
                      Custom Color
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={iconColor}
                        onChange={(e) => setIconColor(e.target.value)}
                        className="w-12 h-10 rounded cursor-pointer"
                        style={{ border: `1px solid ${colorScheme.border}` }}
                      />
                      <Input
                        type="text"
                        value={iconColor}
                        onChange={(e) => setIconColor(e.target.value)}
                        className="w-24 text-sm font-mono"
                        style={{
                            backgroundColor: colorScheme.tertiary,
                            borderColor: colorScheme.border,
                            color: colorScheme.text,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <ModalFooter style={{ borderTop: `1px solid ${colorScheme.border}` }}>
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className={`hover:bg-[${colorScheme.hover}]`}
              style={{
                backgroundColor: 'transparent',
                borderColor: colorScheme.border,
                color: colorScheme.text,
              }}
            >
              {cancelText}
            </Button>
            <Button
              onClick={handleSave}
              disabled={!selectedIcon}
              className={`text-white hover:opacity-90 disabled:opacity-50`}
              style={{
                backgroundColor: !selectedIcon ? colorScheme.disabled : colorScheme.primary,
              }}
            >
              {saveText}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}