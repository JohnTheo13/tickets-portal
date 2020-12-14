export const getItem = item => {
  const stored = localStorage.getItem(item)
  if (!stored) return stored
  return stored.slice(0, 1) === '{' || stored.slice(0, 1) === '['
    ? JSON.parse(stored)
    : stored
}

export const setItem = (itemKey, item) => {
  if (typeof item === 'string') {
    localStorage.setItem(itemKey, item)
  } else {
    localStorage.setItem(itemKey, JSON.stringify(item))
  }
}
