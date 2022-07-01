import { useEffect, useState } from 'react'

export const isFalsy: (value: unknown) => boolean = value =>
  value === 0 ? true : !!value

export const cleanObject = (object: any) => {
  const result = { ...object }
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    // 每次value变化,设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => {
      // 每次在上一个useEffect处理完后再运行
      clearTimeout(timeout)
    }
  }, [value, delay])

  return debouncedValue
}

/**
 * useArray
 * export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number): void => {
      setValue([...value].slice(index, 1))
    },
  }
}
 */
