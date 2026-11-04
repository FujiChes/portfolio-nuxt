// Builds a URL for a file in /public, respecting app.baseURL.
// Usage:  const asset = useAsset();  asset('Images/profile4.jpg')
// This keeps images working if you deploy under a sub-path (e.g. GitHub Pages: /portfolio/).
export function useAsset() {
  const base = (useRuntimeConfig().app.baseURL || '/').replace(/\/+$/, '')
  return (path) => `${base}/${String(path).replace(/^\/+/, '')}`
}