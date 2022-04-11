import type { TreeData, TreeNode, TreeSearchFunc } from "../types/tree-type";

/**
 * 获取一个节点元素的元素路径
 * @param treeData 树
 * @param scFunc 过滤条件，返回true则立即返回该节点（不要修改节点）
 * @returns 找到的节点即父节点数组
 */
export default function treeGetOneNodePathBySearch(treeData: TreeData, scFunc: TreeSearchFunc): Array<TreeNode> | [] {
    if (typeof scFunc !== "function" || !treeData || !treeData.length) {
        return [];
    }
    for (const treeNode of treeData) {
        if (scFunc(treeNode)) {
            return [treeNode];
        }
        if (treeNode.children && treeNode.children.length) {
            const childrenResult = treeGetOneNodePathBySearch(treeNode.children, scFunc);
            if (childrenResult && childrenResult.length) {
                return [treeNode, ...childrenResult];
            }
        }
    }
    return [];
}
