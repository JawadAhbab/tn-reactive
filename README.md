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

## `useReactive()`

```ts
const state = new Reactive(value)
const value = useReactive(state)
```

## `useReactiveState()`

```ts
const state = new Reactive(value)
const [value, setValue] = useReactive(state)
```

## `useReactiveEvent()`

```ts
const state = new Reactive(value)
useReactiveEvent(state, newval => { ... }, [deps])
```

## `useReactiveUpdate()`

```ts
const state = new Reactive(value)
useReactiveUpdate(state)
```
