# React Font Awesome Icon Picker

A customizable React component for picking Font Awesome icons with search and color selection.

## Installation

Install the package and its peer dependencies using your favorite package manager:

```bash
# main package
npm i rc-fa-icon-picker 

# peer dependencies
npm i @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

or

```bash
# main package
yarn add rc-fa-icon-picker 

# peer dependencies
yarn add @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
```

## Usage

Here's a basic example of how to use the `IconPicker` component.

```tsx
import React, { useState } from 'react';
import { IconPicker, IconRenderer } from 'rc-fa-icon-picker';
import type { IconData } from 'rc-fa-icon-picker';

function App() {
  const [selectedIcon, setSelectedIcon] = useState<IconData | null>(null);

  const handleIconSelect = (icon: IconData) => {
    console.log('Selected Icon:', icon);
    setSelectedIcon(icon);
  };

  return (
    <div>
      <h1>Icon Picker Example</h1>
      <IconPicker onSelect={handleIconSelect} />

      {selectedIcon && (
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Icon Preview:</h2>
          <IconRenderer
            iconName={selectedIcon.icon}
            iconType={selectedIcon.type}
            color={selectedIcon.color}
            size="3x"
          />
        </div>
      )}
    </div>
  );
}

export default App;
```

### Using the `useIconPicker` Hook

For more complex state management, you can use the `useIconPicker` hook.

```tsx
import React from 'react';
import { IconPicker, IconRenderer, useIconPicker } from 'rc-fa-icon-picker';
import 'rc-fa-icon-picker/dist/style.css';

function App() {
  const { selectedIcon, handleIconSelect, clearSelection, hasIcon } = useIconPicker();

  return (
    <div>
      <h1>useIconPicker Hook Example</h1>
      <IconPicker onSelect={handleIconSelect} />

      {hasIcon && selectedIcon && (
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Icon Preview:</h2>
          <IconRenderer
            iconName={selectedIcon.icon}
            iconType={selectedIcon.type}
            color={selectedIcon.color}
            size="3x"
          />
          <button onClick={clearSelection} style={{ marginLeft: '10px' }}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
```

## Props

The `IconPicker` component accepts the following props:

| Prop                | Type                           | Default                    | Description                                                                 |
| ------------------- | ------------------------------ | -------------------------- | --------------------------------------------------------------------------- |
| `onSelect`          | `(data: IconData) => void`     | **Required**               | Callback function that is called when an icon is selected.                  |
| `defaultIcon`       | `string`                       | `undefined`                | The name of the icon to be selected by default.                             |
| `defaultType`       | `string`                       | `'fas'`                  | The type of the icon to be selected by default (`fas`, `far`, `fab`). |
| `defaultColor`      | `string`                       | `'#000000'`                | The default color of the icon.                                              |
| `trigger`           | `React.ReactNode`              | `undefined`                | A custom trigger component to open the icon picker modal.                   |
| `triggerClassName`  | `string`                       | `''`                       | CSS class for the default trigger button.                                   |
| `triggerText`       | `string`                       | `'Select Icon'`            | Text for the default trigger button.                                        |
| `title`             | `string`                       | `'Select an Icon'`         | Title of the icon picker modal.                                             |
| `previewPosition`   | `'left'`, `'right'`, `'top'`   | `'left'`                   | Position of the icon preview inside the modal.                              |
| `previewSize`       | `'sm'`, `'md'`, `'lg'`, `'xl'` | `'lg'`                     | Size of the icon in the preview.                                            |
| `colorscheme`       | `'dark'`, `'light'`, `'bemUgm'`| `'light'`                  | The color scheme for the modal.                                             |
| `columns`           | `number`                       | `6`                        | Number of columns in the icon grid.                                         |
| `iconSize`          | `string`                       | `'20px'`                   | The size of the icons in the grid (CSS value).                              |
| `maxHeight`         | `string`                       | `'300px'`                  | The maximum height of the icon grid (CSS value).                            |
| `showSearch`        | `boolean`                      | `true`                     | Whether to show the search input.                                           |
| `showColorPicker`   | `boolean`                      | `true`                     | Whether to show the custom color picker input.                              |
| `showColorPalette`  | `boolean`                      | `true`                     | Whether to show the predefined color palettes.                              |
| `showPreview`       | `boolean`                      | `true`                     | Whether to show the icon preview panel.                                     |
| `colorPalettes`     | `ColorPalette`                 | `DEFAULT_COLOR_PALETTES`   | Custom color palettes to display.                                           |
| `searchPlaceholder` | `string`                       | `'Search icons...'`        | Placeholder text for the search input.                                      |
| `saveText`          | `string`                       | `'Select'`                 | Text for the save button.                                                   |
| `cancelText`        | `string`                       | `'Cancel'`                 | Text for the cancel button.                                                 |
| `className`         | `string`                       | `''`                       | Additional CSS class for the root container.                                |
| `modalClassName`    | `string`                       | `''`                       | Additional CSS class for the modal content.                                 |
| `gridClassName`     | `string`                       | `''`                       | Additional CSS class for the icon grid.                                     |
| `searchClassName`   | `string`                       | `''`                       | Additional CSS class for the search input.                                  |

## Types

The package exports several types for better integration with TypeScript projects.

### `IconData`

This is the main data type for a selected icon.

```typescript
interface IconData {
  icon: string;      // Icon name (e.g., 'star')
  type: string;      // Icon type ('fas', 'far', 'fab')
  color: string;     // Hex color code (e.g., '#ff0000')
}
```

## Need Help?
Contact me hi@salishaidar.me

# License
MIT