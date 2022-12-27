import { useEffect } from 'react'
import { useForceUpdate } from 'tn-react-hooks'
import { Reacnull } from '../accessories/Reacnull'

export const useReacnull = <T>(state: Reacnull<T>) => {
  const update = useForceUpdate()
  const value = state?.current

  useEffect(() => {
    if (!state) return
    const handle = state.on(() => update())
    if (value !== state.current) update()
    return () => handle.disconnect()
  }, [state?.id])

  return value
}
