import strIsContain from "./is-contain";

/**
 * 是否包含数组中的任意字符串
 * @param s 目标字符串
 * @param sList 目标数组字符串
 * @returns `true` 表示 `s` 包含 `sList` 中的某个字符串
 */
export default function strIsContainSStr(s: string, sList: Array<string>): boolean {
    for (const str of sList) {
        if (strIsContain(s, str)) {
            return true;
        }
    }
    return false;
}
