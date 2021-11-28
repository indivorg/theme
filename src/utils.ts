import { Scale } from '@theme-ui/css';
export function scaleAsArray<T = unknown>(scale: Scale<T>): T[] {
  if (Array.isArray(scale)) {
    return scale;
  }

  const values = Object.values(scale);
  return values as T[];
}
