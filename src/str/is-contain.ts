/**
 * 是否包含某个字符串
 * @param s 检查字符串
 * @param i 目标字符串
 * @returns `true` 表示 `s` 包含 `i`
 */
export default function strIsContain(s: string, i: string): boolean {
    return s.indexOf(i) !== -1;
}
