type MaybeString = string | null | undefined;

export default class StringUtils {
    public static isEmpty(str: MaybeString): boolean {
        return str == null;
    }

    public static isBlank(str: string): boolean {
        return str.trim().length === 0;
    }

    public static isNotEmpty(str: MaybeString): str is string {
        return str != null;
    }

    public static isNotBlank(str: string): boolean {
        return str.trim().length > 0;
    }

    public static isNotEmptyAndNotBlank(str: MaybeString): boolean {
        return this.isNotEmpty(str) && this.isNotBlank(str);
    }

    public static isEmptyOrBlank(str: MaybeString): boolean {
        return !this.isNotEmptyAndNotBlank(str);
    }

    public static isNotEmptyOrBlank(str: MaybeString): boolean {
        return !this.isEmptyOrBlank(str);
    }

    public static isNotEmptyAndBlank(str: MaybeString): boolean {
        return this.isNotEmpty(str) && this.isBlank(str);
    }

    public static isEmptyOrNotBlank(str: MaybeString): boolean {
        return !this.isNotEmptyAndBlank(str);
    }


}