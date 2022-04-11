import type { TreeData, TreeNode } from "../types/tree-type";

function _treeGetFirstNodePathByLevel(treeData: TreeData, currentLevel: number, targetLevel: number, parentPath: Array<TreeNode>): Array<TreeNode> {
    if (!treeData || !treeData.length || currentLevel > targetLevel) {
        return parentPath;
    }
    if (currentLevel === targetLevel) {
        if (treeData.length >= 1 && treeData[0]) {
            return [...parentPath, treeData[0]];
        }
        return [...parentPath];
    }
    for (const treeNode of treeData) {
        const childrenResult = _treeGetFirstNodePathByLevel(treeNode.children, currentLevel + 1, targetLevel, [...parentPath, treeNode]);
        if (childrenResult.length > currentLevel) {
            return childrenResult;
        }
    }
    return parentPath;
}

/**
 * 获取某一个层级的第一个节点，并返回该节点的路径
 * 如果不存在该层级就直接返回`[]`
 *
 * @param treeData 树
 * @param level 层级
 */
export default function treeGetFirstNodePathByLevel(treeData: TreeData, level = 1): Array<TreeNode> {
    const result = _treeGetFirstNodePathByLevel(treeData, 1, level, []);
    if (result && result.length === level) {
        return result;
    }
    return [];
}
