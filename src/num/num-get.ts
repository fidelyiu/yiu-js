/**
 * 按分类保留小数
 * @param type 保留的类型
 * @param value 小数
 * @param exp 保留的小数，0不保留小数、-2百位取整、2保留两位小数
 *
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/round#example:_decimal_rounding
 * @see https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary#comment24719818_11832950
 */
function decimalAdjust(type: "round" | "floor" | "ceil", value: number, exp = 0): number {
    // If the exp is undefined or zero...
    if (typeof exp === "undefined" || +exp === 0) {
        return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
        return NaN;
    }
    // Shift
    const valueStr = value.toString().split("e");
    value = Math[type](+(valueStr[0] + "e" + (valueStr[1] ? +valueStr[1] - exp : -exp)));
    // Shift back
    const valueStrArr = value.toString().split("e");
    return +(valueStrArr[0] + "e" + (valueStrArr[1] ? +valueStrArr[1] + exp : exp));
}

/**
 * 获取四舍五入保留小数结果
 * @param value 小数
 * @param decimals 保留位数，默认0，必须是整数，否则NaN
 */
export function getRound(value: number, decimals = 0): number {
    return decimalAdjust("round", value, decimals);
}

/**
 * 获取向下取整保留小数结果
 * @param value 小数
 * @param decimals 保留位数，默认0，必须是整数，否则NaN
 */
export function getFloor(value: number, decimals = 0) {
    return decimalAdjust("floor", value, decimals);
}

/**
 * 获取向上取整保留小数结果
 * @param value 小数
 * @param decimals 保留位数，默认0，必须是整数，否则NaN
 */
export function getCeil(value: number, decimals = 0) {
    return decimalAdjust("ceil", value, decimals);
}
