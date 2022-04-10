import type { TreeData } from "../types/tree-type";

/**
 * 将树展开，生成一个线性数组
 * @param treeData 树数据
 * @returns 所有树的节点数组
 */
export default function treeToArray(treeData: TreeData) {
    if (!treeData || !Array.isArray(treeData)) return [];
    const result = [];
    const stack = [...treeData];
    while (stack.length) {
        const node = stack.pop();
        result.push(node);
        if (node && node.children && Array.isArray(node.children)) {
            stack.unshift(...node.children);
        }
    }
    return result;
}
