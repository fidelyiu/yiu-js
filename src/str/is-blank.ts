import strIsEmpty from "./is-empty";

/**
 * 判断是否全是空格或者空
 * @param str 检查字符串
 * @returns `true` 表示空或者只包含空格
 */
export default function strIsBlank(str: string): boolean {
    return strIsEmpty(str) || str.trim() === "";
}
