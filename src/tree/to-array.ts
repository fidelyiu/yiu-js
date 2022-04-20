import { TreeBaseOpt } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";

/**
 * 将树展开，生成一个线性数组
 * @param treeData 树数据
 * @param opt 解析节点配置
 * @returns 所有树的节点数组
 */
export default function treeToArray(treeData: Array<any>, opt?: TreeBaseOpt): Array<any> {
    if (!treeData || !Array.isArray(treeData)) return [];
    const result: Array<any> = [];
    const stack = [...treeData];
    const idSet = new Set();
    while (stack.length) {
        const node = stack.pop();
        if (!node) continue;
        const id = getTreePropsValue(node, "id", opt);
        if (!idSet.has(id)) {
            idSet.add(id);
            const children = getTreePropsValue(node, "children", opt);
            if (children && Array.isArray(children)) {
                stack.unshift(...children);
            }
        }
    }
    return result;
}
