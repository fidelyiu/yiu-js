import clone from "clone";

/**
 * 深拷贝
 * @param data 对象数据
 * @returns 深拷贝结果
 */
export function deepClone<T>(data: T): T {
    return clone(data);
}
