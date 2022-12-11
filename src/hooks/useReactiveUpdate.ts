import { useEffect } from 'react'
import { useForceUpdate } from 'tn-react-hooks'
import { isArray } from 'tn-validate'
import { Reactive } from '..'

export const useReactiveUpdate = <T>(state: Reactive<T> | Reactive<T>[]) => {
  const update = useForceUpdate()
  const statearr = isArray(state) ? state : [state]

  useEffect(() => {
    const handles = statearr.map(state => state.on(() => update()))
    return () => handles.forEach(handle => handle.disconnect())
  }, [statearr.map(i => i.id).join('-')])
}
