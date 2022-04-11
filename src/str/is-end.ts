import langIsStr from "../lang/is-str";

/**
 * 是否以某个字符串结尾
 * @param s 检查字符串
 * @param e 目标字符串
 * @returns `true` 表示 `s` 以 `e` 结尾
 */
export default function strIsEnd(s: string, e: string): boolean {
    if (!langIsStr(s)) return false;
    const last = s.lastIndexOf(e);
    if (last === -1) {
        return false;
    } else {
        return s.length === e.length + last;
    }
}
