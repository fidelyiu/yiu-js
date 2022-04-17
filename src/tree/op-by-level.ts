import type { TreeBaseOpt, TreeOperationFunc } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";
import setTreePropsValue from "./base/set-tree-props-value";
import TreeIdSet from "./base/tree-id-set";

function _opByLevel(treeData: Array<any>, opFunc: TreeOperationFunc, currentLevel: number, targetLevel: number, idSet: TreeIdSet, opt?: TreeBaseOpt): Array<any> {
    treeData.forEach((item) => {
        if (idSet.has(item, opt)) return;
        idSet.push(item, opt);
        const children = getTreePropsValue(item, "children", opt);
        if (Array.isArray(children) && children.length > 0) {
            setTreePropsValue(item, "children", _opByLevel(children, opFunc, currentLevel + 1, targetLevel, idSet, opt), opt);
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
 * @param opt 树解析配置
 * @returns 返回树，直接修改原数据
 */
export default function treeOpByLevel(treeData: Array<any>, opFunc: TreeOperationFunc, level = 1, opt?: TreeBaseOpt): Array<any> {
    if (typeof opFunc !== "function") {
        return treeData;
    }
    const idSet = new TreeIdSet();
    return _opByLevel(treeData, opFunc, 1, level, idSet, opt);
}
