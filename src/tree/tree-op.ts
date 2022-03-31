import { TreeData, TreeOperationFunc, TreeSearchFunc } from "./tree-type";

export function _operationByLevel(treeData: TreeData, opFunc: TreeOperationFunc, currentLevel: number, targetLevel: number): TreeData {
    treeData.forEach((item) => {
        if (item.children && item.children.length > 0) {
            item.children = _operationByLevel(item.children, opFunc, currentLevel + 1, targetLevel);
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
export function operationByLevel(treeData: TreeData, opFunc: TreeOperationFunc, level = 1): TreeData {
    if (typeof opFunc !== "function") {
        return treeData;
    }
    return _operationByLevel(treeData, opFunc, 1, level);
}

export function _operationBySearch(treeData: TreeData, opFunc: TreeOperationFunc, scFunc: TreeSearchFunc): TreeData {
    treeData.forEach((item) => {
        if (item.children && item.children.length > 0) {
            item.children = _operationBySearch(item.children, opFunc, scFunc);
        }
        if (scFunc(item)) {
            // 符合要求的item
            opFunc(item);
        }
    });
    return treeData;
}

/**
 * 操作所有符合查询条件的节点
 * @param treeData 树
 * @param scFunc 过滤函数，必须返回boolen（不要修改节点）
 * @param opFunc 操作函数
 * @returns
 */
export function operationBySearch(treeData: TreeData, opFunc: TreeOperationFunc, scFunc: TreeSearchFunc): TreeData {
    if (typeof scFunc !== "function" || typeof opFunc !== "function") {
        return treeData;
    }
    return _operationBySearch(treeData, opFunc, scFunc);
}

/**
 * 操作所有节点
 * @param treeData 树
 * @param opFunc 操作函数
 * @returns 返回树，直接修改原数据
 */
export function operationAll(treeData: TreeData, opFunc: TreeOperationFunc): TreeData {
    return operationBySearch(treeData, opFunc, () => true);
}
