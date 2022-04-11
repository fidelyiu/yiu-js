import objGetCloneDeep from "../obj/get-clone-deep";
import type { TreeData, TreeFilterOption, TreeSearchFunc } from "../types/tree-type";

/**
 * 过滤一个树，生成一个新的树
 * @param treeData 树数据
 * @param scFunc 过滤函数（结果true则保留输出）
 * @param opt 过滤配置
 * @returns 新的树数据
 */
export default function treeGetFilterBySearch(treeData: TreeData, scFunc: TreeSearchFunc, opt: TreeFilterOption): TreeData {
    const result: TreeData = [];
    if (!opt) opt = {};
    const parentMatch = !!opt.parentMatch;
    const childrenMatch = !!opt.childrenMatch;
    let deepClone = opt.deepCloneFunc;
    if (!deepClone || typeof deepClone !== "function") {
        deepClone = objGetCloneDeep;
    }
    if (typeof scFunc !== "function" || !treeData || !treeData.length) {
        return result;
    }
    const cloneTreeData = <TreeData>deepClone(treeData);
    if (parentMatch) {
        // 父节点必须匹配
        for (const treeNode of cloneTreeData) {
            // 当前节点是否匹配
            const currentMatch = !!scFunc(treeNode);
            if (!currentMatch) {
                // 不匹配直接跳过
                continue;
            }
            // 处理子节点
            if (treeNode.children && treeNode.children.length) {
                if (childrenMatch) {
                    treeNode.children = treeGetFilterBySearch(treeNode.children, scFunc, { parentMatch, childrenMatch });
                }
            } else {
                treeNode.children = [];
            }
            result.push(treeNode);
        }
    } else {
        // 父节点不需要匹配
        // 此时需要考虑，子节点是否匹配
        for (const treeNode of cloneTreeData) {
            // 当前节点是否匹配
            const currentMatch = !!scFunc(treeNode);
            if (currentMatch) {
                // 如果当前节点匹配了，就直接处理子节点
                if (childrenMatch) {
                    treeNode.children = treeGetFilterBySearch(treeNode.children, scFunc, { parentMatch, childrenMatch });
                }
                result.push(treeNode);
            } else {
                // 当前节点不匹配
                if (treeNode.children && Array.isArray(treeNode.children) && treeNode.children.length) {
                    // 将节点按照当前查询条件再过滤一遍
                    treeNode.children = treeGetFilterBySearch(treeNode.children, scFunc, { parentMatch, childrenMatch });
                    // 如果此时还存在子节点就输出
                    if (treeNode.children && Array.isArray(treeNode.children) && treeNode.children.length) {
                        result.push(treeNode);
                    }
                }
            }
        }
    }
    return result;
}
