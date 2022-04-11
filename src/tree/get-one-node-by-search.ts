import treeGetOneNodePathBySearch from "./get-one-node-path-by-search";
import type { TreeData, TreeNode, TreeSearchFunc } from "../types/tree-type";

/**
 * 获取一个节点元素
 * @param treeData 树
 * @param scFunc 过滤条件，返回true则立即返回该节点（不要修改节点）
 * @returns 找到的节点
 */
export default function treeGetOneNodeBySearch(treeData: TreeData, scFunc: TreeSearchFunc): TreeNode | undefined {
    const result = treeGetOneNodePathBySearch(treeData, scFunc);
    if (result && result.length) {
        return result[result.length - 1];
    }
    return;
}
