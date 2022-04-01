import { isEnd } from "./str-is";

/**
 * 获取字符串反转
 */
export function getReverse(str: string): string {
    return str.split("").reverse().join("");
}

/**
 * 获取第一个字符
 */
export function getFirstStr(str: string): string {
    return str[0] || "";
}

/**
 * 获取删除结尾字符串的新字符串
 * @param s 原字符串
 * @param e 删除的结尾字符串
 * @returns 新的字符串，如果没有以 `e` 结尾则不删除
 */
export function getDelEndStr(s: string, e: string): string {
    if (!isEnd(s, e)) {
        return s;
    } else {
        return s.slice(0, -e.length);
    }
}
