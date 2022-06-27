import { useEffect, useState } from 'react'

export const isFalsy = (value: any) => (value === 0 ? false : !value)

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

export const useDebounce = (value: any, delay?:number) => {
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

// export const useThrottle = (value, delay, dep = []) => {
//   const {current} = useRef()
// }
