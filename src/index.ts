import { ObjectOf } from 'tn-typescript'
import { uniqueID } from './accessories/uniqueID'
type Callback<T> = (value: T) => void
type Event<T> = { callback: Callback<T> }

export class Reactive<T> {
  public id = uniqueID()
  private state: T
  public version = 0
  constructor(state?: T) {
    this.state = state as T
  }

  public get current(): T {
    return this.state
  }

  public set current(value: T) {
    this.set(value)
  }

  public set(value: T) {
    if (this.state === value) return
    this.version += 1
    this.state = value
    this.callback(value)
  }

  public emit(value: T) {
    this.state = value
    this.callback(value)
  }

  public forceUpdate() {
    this.callback(this.state)
  }

  private events: ObjectOf<Event<T>> = {}
  private callback(value: T) {
    Object.entries(this.events).forEach(([_, { callback }]) => callback(value))
  }

  public on(callback: Callback<T>): { disconnect(): void } {
    const eventkey = `e${uniqueID()}`
    this.events[eventkey] = { callback }

    return {
      disconnect: () => {
        delete this.events[eventkey]
      },
    }
  }
}
