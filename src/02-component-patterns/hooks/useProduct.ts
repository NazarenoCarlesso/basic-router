import { useEffect, useRef, useState } from 'react'
import { Product, onChangeArgs } from '../interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(value)
  const isControlled = useRef<boolean>(!!onChange)

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({ product, count: value })
    }
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
  }

  useEffect(() => { setCounter(value) }, [value])

  return {
    counter,
    increaseBy
  }
}

export default useProduct
