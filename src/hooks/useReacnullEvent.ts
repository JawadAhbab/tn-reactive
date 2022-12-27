import { useEffect } from 'react'
import { Reactive } from '..'
import { Reacnull } from '../accessories/Reacnull'
type Deps = (number | string | boolean)[]
type Callback<T> = (value: T) => void

export const useReacnullEvent = <T>(state: Reacnull<T>, callback: Callback<T>, deps: Deps = []) => {
  useEffect(() => {
    if (!state) return
    const handle = state.on(() => callback(state.current))
    return () => handle.disconnect()
  }, [state?.id, ...deps])
}
