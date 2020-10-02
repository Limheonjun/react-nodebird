import { useState, useCallback } from 'react'

export default function (initialValue) {
  const [value, setValue] = useState(initialValue)
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    //e.target.value 무조건 string타입이기 때문에 function<T> 제네릭으로 useState의 제네릭을 설정할 수 없음, 
    //혹여나 string외의 다른 타입이 들어오면 e.target.value가 해당 타입이 아니기 때문
    setValue(e.target.value)
  }, [])
  return [value, handler ,setValue]
}