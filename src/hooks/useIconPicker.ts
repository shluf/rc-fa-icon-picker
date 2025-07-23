import { useState, useCallback } from 'react';
import { IconData } from '../types';

export interface UseIconPickerReturn {
  selectedIcon: IconData | null;
  setSelectedIcon: (icon: IconData | null) => void;
  handleIconSelect: (icon: IconData) => void;
  clearSelection: () => void;
  
  getSelectedIcon: () => IconData | null;
  hasIcon: boolean;
  
  getIconName: () => string | null;
  getIconType: () => string | null;
  getIconColor: () => string | null;
}

export function useIconPicker(defaultIcon?: IconData): UseIconPickerReturn {
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(defaultIcon || null);

  const handleIconSelect = useCallback((icon: IconData) => {
    setSelectedIcon(icon);
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIcon(null);
  }, []);

  const getSelectedIcon = useCallback((): IconData | null => {
    return selectedIcon;
  }, [selectedIcon]);

  const getIconName = useCallback((): string | null => {
    return selectedIcon?.icon || null;
  }, [selectedIcon]);

  const getIconType = useCallback((): string | null => {
    return selectedIcon?.type || null;
  }, [selectedIcon]);

  const getIconColor = useCallback((): string | null => {
    return selectedIcon?.color || null;
  }, [selectedIcon]);

  return {
    selectedIcon,
    setSelectedIcon,
    handleIconSelect,
    clearSelection,
    getSelectedIcon,
    hasIcon: selectedIcon !== null,
    getIconName,
    getIconType,
    getIconColor,
  };
}