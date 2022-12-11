import { useEffect } from 'react'
import { useForceUpdate } from 'tn-react-hooks'
import { Reactive } from '..'

export const useReactive = <T>(state: Reactive<T>) => {
  const update = useForceUpdate()
  const value = state.current

  useEffect(() => {
    const handle = state.on(() => update())
    if (value !== state.current) update()
    return () => handle.disconnect()
  }, [state.id])

  return value
}
