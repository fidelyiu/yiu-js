import type { TreeData, TreeOperationFunc } from "../types/tree-type";

function _opByLevel(treeData: TreeData, opFunc: TreeOperationFunc, currentLevel: number, targetLevel: number): TreeData {
    treeData.forEach((item) => {
        if (item.children && item.children.length > 0) {
            item.children = _opByLevel(item.children, opFunc, currentLevel + 1, targetLevel);
        }
        if (currentLevel === targetLevel) {
            opFunc(item);
        }
    });
    return treeData;
}

/**
 * 操作某一级节点的所有数据
 * @param treeData 树
 * @param opFunc 操作函数
 * @param level 层级
 * @returns 返回树，直接修改原数据
 */
export default function treeOpByLevel(treeData: TreeData, opFunc: TreeOperationFunc, level = 1): TreeData {
    if (typeof opFunc !== "function") {
        return treeData;
    }
    return _opByLevel(treeData, opFunc, 1, level);
}
