import treeOpBySearch from "./op-by-search";
import type { TreeData, TreeOperationFunc } from "../types/tree-type";

/**
 * 操作所有节点
 * @param treeData 树
 * @param opFunc 操作函数
 * @returns 返回树，直接修改原数据
 */
export default function treeOpAll(treeData: TreeData, opFunc: TreeOperationFunc): TreeData {
    return treeOpBySearch(treeData, opFunc, () => true);
}
