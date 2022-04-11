import langIsNumber from "./is-number";
import numGetCeil from "../num/get-ceil";

/**
 * 判断数字是否是整数
 *
 * 前提是数字
 */
export default function langIsInt(num?: any): boolean {
    return langIsNumber(num) && num === numGetCeil(num);
}
