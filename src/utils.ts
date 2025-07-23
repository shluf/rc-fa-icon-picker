import * as solid from '@fortawesome/free-solid-svg-icons';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { IconType } from './types';

const libMap: Record<IconType, Record<string, any>> = {
  fas: solid,
  far: regular,
  fab: brands,
};

export function getIconByName(name: string, type: IconType) {
  return libMap[type]?.[name] ?? null;
}