export type StyledNotHTML<T> = {
    [K in keyof T as `$${string & K}`]: T[K];
};
