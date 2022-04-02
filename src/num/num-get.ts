import { round as getRound, floor as getFloor, ceil as getCeil } from "lodash";

export {
    /**
     * 获取四舍五入保留小数结果
     * @param n 小数
     * @param precision 保留位数，默认0
     */
    getRound,
    /**
     * 获取向下取整保留小数结果
     * @param n 小数
     * @param precision 保留位数，默认0
     */
    getFloor,
    /**
     * 获取向上取整保留小数结果
     * @param n 小数
     * @param precision 保留位数，默认0
     */
    getCeil,
};
