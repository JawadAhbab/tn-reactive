import { useEffect } from 'react'
import { Reactive } from '..'
type Deps = (number | string | boolean)[]
type Callback<T> = (value: T) => void

export const useReactiveEvent = <T>(state: Reactive<T>, callback: Callback<T>, deps: Deps = []) => {
  useEffect(() => {
    const handle = state.on(() => callback(state.current))
    return () => handle.disconnect()
  }, [state.id, ...deps])
}
