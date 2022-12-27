## `new Reactive()`

Class that creates a reactive state.

```ts
const state = new Reactive(value)
state.current = 1
console.log(state.current)

const handle = state.on(value => console.log(value))
handle.disconnect()
```

| Properties       | Info                                      |
| ---------------- | ----------------------------------------- |
| `.id`            | `ReactiveState()` instance id             |
| `.current`       | Current state of `ReactiveState()`        |
| `.set(value)`    | Same as setting value to `.current`       |
| `.emit(value)`   | Best fits when using `useReactiveEvent()` |
| `.forceUpdate()` | Force callback to all listeners           |
| `.on(func)`      | Start listening to any update             |

## `useReactive()` & `useReacnull()`

```ts
const state = new Reactive(value)
const value = useReactive(state)

const nullable: null | Reactive<T> = null
const value = useReacnull(nullable)
```

## `useReactiveState()` & `useReacnullState()`

```ts
const state = new Reactive(value)
const [value, setValue] = useReactiveState(state)

const nullable: null | Reactive<T> = null
const [value, setValue] = useReacnullState(nullable)
```

## `useReactiveEvent()` & `useReacnullEvent()`

```ts
const state = new Reactive(value)
useReactiveEvent(state, newval => { ... }, [deps])

const nullable: null | Reactive<T> = null
useReacnullEvent(nullable, newval => { ... }, [deps])
```

## `useReactiveUpdate()` & `useReacnullUpdate()`

```ts
const state = new Reactive(value)
useReactiveUpdate(state)

const nullable: null | Reactive<T> = null
useReacnullUpdate(nullable)
```
