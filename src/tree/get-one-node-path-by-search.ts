import type { TreeBaseOpt, TreeSearchFunc } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";

function _treeGetOneNodePathBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, opt?: TreeBaseOpt): Array<any> | [] {
    if (typeof scFunc !== "function" || !treeData || !treeData.length) {
        return [];
    }
    for (const treeNode of treeData) {
        if (scFunc(treeNode)) {
            return [treeNode];
        }
        const children = getTreePropsValue(treeNode, "children", opt);
        if (Array.isArray(children) && children.length) {
            const childrenResult = _treeGetOneNodePathBySearch(children, scFunc, opt);
            if (childrenResult && childrenResult.length) {
                return [treeNode, ...childrenResult];
            }
        }
    }
    return [];
}

/**
 * 获取一个节点元素的元素路径
 * @param treeData 树
 * @param scFunc 过滤条件，返回true则立即返回该节点（不要修改节点）
 * @param opt 解析节点配置
 * @returns 找到的节点即父节点数组
 */
export default function treeGetOneNodePathBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, opt?: TreeBaseOpt): Array<any> | [] {
    return _treeGetOneNodePathBySearch(treeData, scFunc, opt);
}
