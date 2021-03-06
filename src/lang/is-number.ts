import { isNumber } from "lodash";

/**
 * 检查值是否是 Number 或者 Number对象
 * 注意：要排除`Infinity`、`-Infinity`和`NaN`，使用`isFinite`方法
 * @param value 要检查的值
 * @return `true` 表示是Number 或者 Number对象
 */
const langIsNumber = isNumber;

export default langIsNumber;
