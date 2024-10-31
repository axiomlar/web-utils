type MaybeArray<T> = Array<T> | null | undefined;

export default class ArrayUtils {

    public static isEmpty<T>(arr: MaybeArray<T>): boolean {
        return arr == null;
    }

    public static isBlank<T>(arr: Array<T>): boolean {
        return arr.length === 0;
    }

    public static isNotEmpty<T>(arr: MaybeArray<T>): arr is Array<T> {
        return arr != null;
    }

    public static isNotBlank<T>(arr: Array<T>): boolean {
        return arr.length > 0;
    }

    public static isNotEmptyAndNotBlank<T>(arr: MaybeArray<T>): boolean {
        return this.isNotEmpty(arr) && this.isNotBlank(arr);
    }

    public static isEmptyOrBlank<T>(arr: MaybeArray<T>): boolean {
        return !this.isNotEmptyAndNotBlank(arr);
    }

    public static isNotEmptyOrBlank<T>(arr: MaybeArray<T>): boolean {
        return !this.isEmptyOrBlank(arr);
    }

    public static isNotEmptyAndBlank<T>(arr: MaybeArray<T>): boolean {
        return this.isNotEmpty(arr) && this.isBlank(arr);
    }

    public static isEmptyOrNotBlank<T>(arr: MaybeArray<T>): boolean {
        return !this.isNotEmptyAndBlank(arr);
    }

    public static arrayContainsObject<T extends Object>(arr: Array<T>, key: keyof T, value: unknown): boolean {
        return !!arr.find(item => item[key] === value);
    }
}