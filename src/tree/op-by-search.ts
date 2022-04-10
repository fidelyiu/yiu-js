import type { TreeData, TreeOperationFunc, TreeSearchFunc } from "../types/tree-type";

function _opBySearch(treeData: TreeData, opFunc: TreeOperationFunc, scFunc: TreeSearchFunc): TreeData {
    treeData.forEach((item) => {
        if (item.children && item.children.length > 0) {
            item.children = _opBySearch(item.children, opFunc, scFunc);
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
export default function treeOpBySearch(treeData: TreeData, opFunc: TreeOperationFunc, scFunc: TreeSearchFunc): TreeData {
    if (typeof scFunc !== "function" || typeof opFunc !== "function") {
        return treeData;
    }
    return _opBySearch(treeData, opFunc, scFunc);
}
