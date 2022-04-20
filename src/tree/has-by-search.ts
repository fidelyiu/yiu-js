import type { TreeBaseOpt, TreeSearchFunc } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";

function _treeHasBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, opt?: TreeBaseOpt): boolean {
    if (typeof scFunc !== "function" || !Array.isArray(treeData) || !treeData.length) {
        return false;
    }
    for (const treeNode of treeData) {
        if (scFunc(treeNode)) {
            return true;
        }
        const children = getTreePropsValue(treeNode, "children", opt);
        if (Array.isArray(children) && children.length && _treeHasBySearch(children, scFunc, opt)) {
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
    return _treeHasBySearch(treeData, scFunc, opt);
}
