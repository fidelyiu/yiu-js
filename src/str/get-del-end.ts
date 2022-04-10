import strIsEnd from "./is-end";

/**
 * 获取删除结尾字符串的新字符串
 * @param s 原字符串
 * @param e 删除的结尾字符串
 * @returns 新的字符串，如果没有以 `e` 结尾则不删除
 */
export default function strGetDelEnd(s: string, e: string): string {
    if (!strIsEnd(s, e)) {
        return s;
    } else {
        return s.slice(0, -e.length);
    }
}
