import type { TreeBaseOpt, TreeSearchFunc } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";
import TreeIdSet from "./base/tree-id-set";

function _treeHasBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, idSet: TreeIdSet, opt?: TreeBaseOpt): boolean {
    if (typeof scFunc !== "function" || !Array.isArray(treeData) || !treeData.length) {
        return false;
    }
    for (const treeNode of treeData) {
        if (idSet.has(treeNode, opt)) continue;
        idSet.push(treeNode, opt);
        if (scFunc(treeNode)) {
            return true;
        }
        const children = getTreePropsValue(treeNode, "children", opt);
        if (Array.isArray(children) && children.length && _treeHasBySearch(children, scFunc, idSet, opt)) {
            return true;
        }
    }
    return false;
}

/**
 * 判断树中是否有符合查询函数的节点
 * @param treeData 树数据
 * @param scFunc 查询函数
 * @param opt 树解析配置
 * @returns
 */
export default function treeHasBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, opt?: TreeBaseOpt): boolean {
    const idSet = new TreeIdSet();
    return _treeHasBySearch(treeData, scFunc, idSet, opt);
}
