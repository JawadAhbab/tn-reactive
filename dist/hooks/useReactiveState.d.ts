import { Reactive } from '..';
export declare const useReactiveState: <T>(state: Reactive<T>) => readonly [T, (value: T) => T];
