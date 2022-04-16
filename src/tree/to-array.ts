import type { TreeData, TreePropsOpt } from "../types/tree-type";
import getTreeDefaultProps from "./get-tree-default-props";

/**
 * 将树展开，生成一个线性数组
 * @param treeData 树数据
 * @returns 所有树的节点数组
 */
export default function treeToArray(treeData: TreeData, opt?: TreePropsOpt) {
    const props = getTreeDefaultProps(opt);
    if (!treeData || !Array.isArray(treeData)) return [];
    const result = [];
    const stack = [...treeData];
    const recorder = new Set();
    while (stack.length) {
        const node = stack.pop();
        if (!node) continue;
        const id = node[props.keyProp];
        if (!recorder.has(id)) {
            if (typeof id !== "undefined") recorder.add(`${id}`);
            result.push(node);
            if (node && node.children && Array.isArray(node.children)) {
                stack.unshift(...node.children);
            }
        }
    }
    return result;
}
