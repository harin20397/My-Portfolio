/**
 * Resolves static asset paths dynamically by prepending Vite's BASE_URL,
 * ensuring clean resolution on all hostings (including subpaths).
 */
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return base.endsWith("/") ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
};
