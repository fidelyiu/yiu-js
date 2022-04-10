import type { CompareType } from "../types/num-type";

/**
 * 判断数字`num`是否在线段`[x1, x2]`范围内
 *
 * 前提时四个参数要是数字，参数注意顺序。
 *
 * @param num 目标数字
 * @param x1 线段的较小值
 * @param x2 线段的较大值
 * @param compareType 线段比较类型
 * @returns `true` 表示在范围内，`false` 表示不在范围内。
 */
export default function numIsInLineSegment(num: number, x1: number, x2: number, compareType: CompareType = "[]"): boolean {
    switch (compareType) {
        case "[]":
            return x1 <= num && num <= x2;
        case "()":
            return x1 < num && num < x2;
        case "(]":
            return x1 < num && num <= x2;
        case "[)":
            return x1 <= num && num < x2;
        default:
            return false;
    }
}
