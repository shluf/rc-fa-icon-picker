const fs = require('fs');
const solidIcons = require('@fortawesome/free-solid-svg-icons');
const regularIcons = require('@fortawesome/free-regular-svg-icons')
const brandIcons = require('@fortawesome/free-brands-svg-icons')

function extractIcons(icons, type) {
  return Object.keys(icons)
    .filter((key) => key.startsWith('fa') && icons[key].iconName)
    .map((key) => ({
      name: key,
      iconName: icons[key].iconName,
      type,
    }));
}

const allIcons = [
  ...extractIcons(solidIcons, 'fas'),
  ...extractIcons(regularIcons, 'far'),
  ...extractIcons(brandIcons, 'fab'),
];

fs.writeFileSync('./src/fontawesome-icons.json', JSON.stringify(allIcons, null, 2));
console.log(`Saved ${allIcons.length} icons to fontawesome-icons.json`);
