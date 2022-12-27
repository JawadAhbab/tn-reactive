import { useEffect } from 'react'
import { useForceUpdate } from 'tn-react-hooks'
import { isArray } from 'tn-validate'
import { Reacnull } from '../accessories/Reacnull'

export const useReacnullUpdate = <T>(state: Reacnull<T> | Reacnull<T>[]) => {
  const update = useForceUpdate()
  const statearr = isArray(state) ? state : [state]

  useEffect(() => {
    const handles = statearr.map(state => state?.on(() => update()))
    return () => handles.forEach(handle => handle?.disconnect())
  }, [statearr.map(i => i?.id).join('-')])
}
