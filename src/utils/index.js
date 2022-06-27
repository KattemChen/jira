import { useEffect, useState } from 'react'

export const isFalsy = value => (value === 0 ? false : !value)

export const cleanObject = object => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = callback => {
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])

  return debouncedValue
}
