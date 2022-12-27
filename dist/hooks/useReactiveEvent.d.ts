import { Reactive } from '..';
type Deps = (number | string | boolean)[];
type Callback<T> = (value: T) => void;
export declare const useReactiveEvent: <T>(state: Reactive<T>, callback: Callback<T>, deps?: Deps) => void;
export {};
