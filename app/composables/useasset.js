
export function useAsset() {
  return (filePath) => {
    if (!filePath || typeof filePath !== 'string') {
      return ''
    }

    const cleanPath = filePath.replace(/^\/+/, '')

    return `/${cleanPath}`
  }
}
