import { useEffect } from 'react'
import { useForceUpdate } from 'tn-react-hooks'
import { Reacnull } from '../accessories/Reacnull'

export const useReacnullState = <T>(state: Reacnull<T>) => {
  const update = useForceUpdate()
  const value = state?.current

  const setValue = (value: T) => {
    if (!state) return
    state.current = value
  }

  useEffect(() => {
    if (!state) return
    const handle = state.on(() => update())
    if (value !== state.current) update()
    return () => handle.disconnect()
  }, [state?.id])

  return [value, setValue] as const
}
