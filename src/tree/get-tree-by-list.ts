import { TreeBaseOpt } from "../types/tree-type";
import getTreePropsValue from "./base/get-tree-props-value";
import treeOpBySearch from "./op-by-search";

/**
 * 根据List生成Tree
 * @param list 数组
 * @param parentParseIdFunc 解析parentKey函数
 * @param parseIdFunc 解析key函数
 * @returns
 */
export default function treeGetTreeByList(list: Array<any>, opt?: TreeBaseOpt) {
    if (!Array.isArray(list) || !list.length) return [];
    let result: Array<any> = [];
    list.forEach((item) => {
        result = mergeTreeDataAndNode(result, item, opt);
    });
    return result;
}

function mergeNodeToTree(tree: Array<any>, node: any, opt?: TreeBaseOpt): Array<any> {
    if (!Array.isArray(tree) || !tree.length) return [node];
    const id = getTreePropsValue(node, "id", opt);
    if (!id) return tree;
    const pid = getTreePropsValue(node, "pid", opt);
    if (!pid) {
        return mergeTreeToNode(tree, node, opt);
    }
    let hasMerge = false;
    treeOpBySearch(
        tree,
        () => {},
        (item) => getTreePropsValue(item, "id", opt) === pid,
        opt
    );
    const result = tree.slice();
    result.push(node);
    return result;
}

function mergeTreeToNode(tree: Array<any>, node: any, opt?: TreeBaseOpt): Array<any> {
    return [];
}

function mergeNode(node1: any, node2: any, opt?: TreeBaseOpt): any {
    
}
