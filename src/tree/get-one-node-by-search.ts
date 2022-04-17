import treeGetOneNodePathBySearch from "./get-one-node-path-by-search";
import type { TreeBaseOpt, TreeSearchFunc } from "../types/tree-type";

/**
 * 获取一个节点元素
 * @param treeData 树
 * @param scFunc 过滤条件，返回true则立即返回该节点（不要修改节点）
 * @param opt 解析节点配置
 * @returns 找到的节点
 */
export default function treeGetOneNodeBySearch(treeData: Array<any>, scFunc: TreeSearchFunc, opt?: TreeBaseOpt): Array<any> | undefined {
    const result = treeGetOneNodePathBySearch(treeData, scFunc, opt);
    if (result && result.length) {
        return result[result.length - 1];
    }
    return;
}
