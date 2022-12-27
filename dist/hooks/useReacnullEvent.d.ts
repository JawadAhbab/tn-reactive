import { Reacnull } from '../accessories/Reacnull';
type Deps = (number | string | boolean)[];
type Callback<T> = (value: T) => void;
export declare const useReacnullEvent: <T>(state: Reacnull<T>, callback: Callback<T>, deps?: Deps) => void;
export {};
