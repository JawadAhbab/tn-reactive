type Callback<T> = (value: T) => void;
export declare class Reactive<T> {
    id: string;
    private state;
    constructor(state: T);
    get current(): T;
    set current(value: T);
    set(value: T): void;
    emit(value: T): void;
    forceUpdate(): void;
    private events;
    private callback;
    on(callback: Callback<T>): {
        disconnect(): void;
    };
}
export {};
