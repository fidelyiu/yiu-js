import { isFinite } from "lodash";

/**
 * 检查值是否是一个有效数
 * 注意：这个方法是基于`Number.isFinite`的
 * @param value 要检查的值
 * @return `true` 表示是有效值
 */
const langIsFinite = isFinite;

export default langIsFinite;
