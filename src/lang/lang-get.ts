import { clone, cloneDeep } from "lodash";

/**
 * 创建一个浅层克隆的值。
 *
 * 注意：该方法松散地基于结构化克隆算法。
 *
 * 支持克隆：
 * `array`、`array buffer`、`boolean`、
 * `date object`、`map`、`number`、
 * `Object对象`、`Regexes`、`Set`、
 * `string`、`symbol`和`typed array`。
 *
 * 参数对象自身的可枚举属性被克隆为普通对象。
 * 对于不可克隆的值，如错误`error object`、`function`、`DOM节点`和`WeakMaps`，会返回一个空对象。
 *
 * @param value 要克隆的值
 * @return 返回克隆的值
 */
const getClone = clone;
/**
 * 这个方法和`getClone`一样，只是它递归地克隆值。
 * @param value 要克隆的值
 * @return 返回克隆的值
 */
const getCloneDeep = cloneDeep;

export { getClone, getCloneDeep };
