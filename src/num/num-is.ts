import type { CompareType } from "./num-type";

/**
 * 判断线段`a-[x1,x2]`是否与线段`b-[x3,x4]`相交
 *
 * 前提时四个参数要是数字，参数注意顺序。
 *
 * @param x1 线段`a`的较小值
 * @param x2 线段`a`的较大值
 * @param x3 线段`b`的较小值
 * @param x4 线段`b`的较大值
 * @returns `true` 表示相交，`false` 表示不相交。
 */
export function isIntersect(x1: number, x2: number, x3: number, x4: number): boolean {
    if (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(x4)) return false;
    return (
        // l3是否在第一个线段中
        isInLineSegment(x1, x3, x4) || isInLineSegment(x2, x3, x4) || isInLineSegment(x3, x1, x2) || isInLineSegment(x4, x1, x2)
    );
}

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
export function isInLineSegment(num: number, x1: number, x2: number, compareType: CompareType = "[]"): boolean {
    switch (compareType) {
        case "[]":
            return x1 <= num && num <= x2;
        case "()":
            return x1 < num && num < x2;
        case "(]":
            return x1 < num && num <= x2;
        case "[)":
            return x1 <= num && num < x2;
    }
}
