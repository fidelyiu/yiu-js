import numIsInLineSegment from "./is-in-line-segment";

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
export default function numIsIntersect(x1: number, x2: number, x3: number, x4: number): boolean {
    if (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(x4)) return false;
    return (
        // l3是否在第一个线段中
        numIsInLineSegment(x1, x3, x4) || numIsInLineSegment(x2, x3, x4) || numIsInLineSegment(x3, x1, x2) || numIsInLineSegment(x4, x1, x2)
    );
}
