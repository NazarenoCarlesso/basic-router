import { useEffect, useState } from 'react'
import { Product, onChangeArgs } from '../interfaces'

interface useProductArgs {
  product: Product
  onChange?: (args: onChangeArgs) => void
  value?: number
}

const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
  const [counter, setCounter] = useState<number>(value)

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue)
    onChange && onChange({ product, count: newValue })
  }

  useEffect(() => { setCounter(value) }, [value])

  return {
    counter,
    increaseBy
  }
}

export default useProduct
