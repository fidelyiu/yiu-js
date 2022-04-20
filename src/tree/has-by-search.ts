import type { TreeBaseOpt, TreeSearchFunc } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";

function _treeHasBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, currentLevel: number, opt?: TreeBaseOpt): boolean {
    if (typeof scFunc !== "function" || !Array.isArray(treeData) || !treeData.length) {
        return false;
    }
    let index = 0;
    for (const treeNode of treeData) {
        if (scFunc(treeNode, currentLevel + 1, index)) {
            return true;
        }
        const children = getTreePropsValue(treeNode, "children", opt);
        if (Array.isArray(children) && children.length && _treeHasBySearch(children, scFunc, currentLevel + 1, opt)) {
            return true;
        }
        index += 1;
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
    return _treeHasBySearch(treeData, scFunc, 0, opt);
}
