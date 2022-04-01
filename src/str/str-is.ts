/**
 * 是否为空
 * @param str 检查字符串
 * @returns `true` 表示空
 */
export function isEmpty(str: string): boolean {
    return !!str;
}

/**
 * 判断是否全是空格或者空
 * @param str 检查字符串
 * @returns `true` 表示空或者只包含空格
 */
export function isBlank(str: string): boolean {
    return isEmpty(str) || str.trim() === "";
}

/**
 * 是否以某个字符串结尾
 * @param s 检查字符串
 * @param e 目标字符串
 * @returns `true` 表示 `s` 以 `e` 结尾
 */
export function isEnd(s: string, e: string): boolean {
    const last = s.lastIndexOf(e);
    if (last === -1) {
        return false;
    } else {
        return s.length === e.length + last;
    }
}

/**
 * 是否包含某个字符串
 * @param s 检查字符串
 * @param i 目标字符串
 * @returns `true` 表示 `s` 包含 `i`
 */
export function isContainStr(s: string, i: string): boolean {
    return s.indexOf(i) !== -1;
}

/**
 * 是否包含数组中的任意字符串
 * @param s 目标字符串
 * @param sList 目标数组字符串
 * @returns `true` 表示 `s` 包含 `sList` 中的某个字符串
 */
export function isContainSStr(s: string, sList: Array<string>): boolean {
    for (const str of sList) {
        if (isContainStr(s, str)) {
            return true;
        }
    }
    return false;
}
