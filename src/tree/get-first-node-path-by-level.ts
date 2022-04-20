import type { TreeBaseOpt } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";

function _treeGetFirstNodePathByLevel(treeData: Array<any>, currentLevel: number, targetLevel: number, parentPath: Array<any>, opt?: TreeBaseOpt): Array<any> {
    if (!Array.isArray(treeData) || !treeData.length || currentLevel > targetLevel) {
        return parentPath;
    }
    if (currentLevel === targetLevel) {
        if (treeData.length >= 1 && treeData[0]) {
            return [...parentPath, treeData[0]];
        }
        return [...parentPath];
    }
    for (const treeNode of treeData) {
        const children = getTreePropsValue(treeNode, "children", opt);
        const childrenResult = _treeGetFirstNodePathByLevel(children, currentLevel + 1, targetLevel, [...parentPath, treeNode], opt);
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
 * @param opt 解析节点配置
 */
export default function treeGetFirstNodePathByLevel(treeData: Array<any>, level = 1, opt?: TreeBaseOpt): Array<any> {
    const result = _treeGetFirstNodePathByLevel(treeData, 1, level, [], opt);
    if (result && result.length === level) {
        return result;
    }
    return [];
}
