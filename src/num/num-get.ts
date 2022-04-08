import { round as _round, floor as _floor, ceil as _ceil } from "lodash";

/**
 * 获取四舍五入保留小数结果
 * @param n 小数
 * @param precision 保留位数，默认0
 */
const getRound = _round;
/**
 * 获取向下取整保留小数结果
 * @param n 小数
 * @param precision 保留位数，默认0
 */
const getFloor = _floor;
/**
 * 获取向上取整保留小数结果
 * @param n 小数
 * @param precision 保留位数，默认0
 */
const getCeil = _ceil;

export { getRound, getFloor, getCeil };
