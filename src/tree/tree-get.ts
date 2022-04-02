import { getCloneDeep } from "src/lang/lang-get";
import type { TreeData, TreeFilterOption, TreeNode, TreeSearchFunc } from "./tree-type";

/**
 * 获取一个节点元素
 * @param treeData 树
 * @param scFunc 过滤条件，返回true则立即返回该节点（不要修改节点）
 * @returns 找到的节点
 */
export function getOneNodeBySearch(treeData: TreeData, scFunc: TreeSearchFunc): TreeNode | undefined {
    const result = getOneNodePathBySearch(treeData, scFunc);
    if (result && result.length) {
        return result[result.length - 1];
    }
    return;
}

/**
 * 获取一个节点元素的元素路径
 * @param treeData 树
 * @param scFunc 过滤条件，返回true则立即返回该节点（不要修改节点）
 * @returns 找到的节点即父节点数组
 */
export function getOneNodePathBySearch(treeData: TreeData, scFunc: TreeSearchFunc): Array<TreeNode> | [] {
    if (typeof scFunc !== "function" || !treeData || !treeData.length) {
        return [];
    }
    for (const treeNode of treeData) {
        if (scFunc(treeNode)) {
            return [treeNode];
        }
        if (treeNode.children && treeNode.children.length) {
            const childrenResult = getOneNodePathBySearch(treeNode.children, scFunc);
            if (childrenResult && childrenResult.length) {
                return [treeNode, ...childrenResult];
            }
        }
    }
    return [];
}

function _getFirstNodePathByLevel(treeData: TreeData, currentLevel: number, targetLevel: number, parentPath: Array<TreeNode>): Array<TreeNode> {
    if (!treeData || !treeData.length || currentLevel > targetLevel) {
        return parentPath;
    }
    if (currentLevel === targetLevel) {
        if (treeData.length >= 1 && treeData[0]) {
            return [...parentPath, treeData[0]];
        }
        return [...parentPath];
    }
    for (const treeNode of treeData) {
        const childrenResult = _getFirstNodePathByLevel(treeNode.children, currentLevel + 1, targetLevel, [...parentPath, treeNode]);
        if (childrenResult.length > currentLevel) {
            return childrenResult;
        }
    }
    return parentPath;
}

/**
 * 获取某一个层级的第一个节点，并返回该节点的路径
 * 如果不存在该层级就直接返回`[]`
 *
 * @param treeData 树
 * @param level 层级
 */
export function getFirstNodePathByLevel(treeData: TreeData, level = 1): Array<TreeNode> {
    const result = _getFirstNodePathByLevel(treeData, 1, level, []);
    if (result && result.length === level) {
        return result;
    }
    return [];
}

/**
 * 过滤一个树，生成一个新的树
 * @param treeData 树数据
 * @param scFunc 过滤函数（结果true则保留输出）
 * @param opt 过滤配置
 * @returns 新的树数据
 */
export function getFilterBySearch(treeData: TreeData, scFunc: TreeSearchFunc, opt: TreeFilterOption): TreeData {
    const result: TreeData = [];
    if (!opt) opt = {};
    const parentMatch = !!opt.parentMatch;
    const childrenMatch = !!opt.childrenMatch;
    let deepClone = opt.deepCloneFunc;
    if (!deepClone || typeof deepClone !== "function") {
        deepClone = getCloneDeep;
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
                    treeNode.children = getFilterBySearch(treeNode.children, scFunc, { parentMatch, childrenMatch });
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
                    treeNode.children = getFilterBySearch(treeNode.children, scFunc, { parentMatch, childrenMatch });
                }
                result.push(treeNode);
            } else {
                // 当前节点不匹配
                if (treeNode.children && Array.isArray(treeNode.children) && treeNode.children.length) {
                    // 将节点按照当前查询条件再过滤一遍
                    treeNode.children = getFilterBySearch(treeNode.children, scFunc, { parentMatch, childrenMatch });
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

/**
 * 将树展开，生成一个线性数组
 * @param treeData 树数据
 * @returns 所有树的节点数组
 */
export function toArray(treeData: TreeData) {
    if (!treeData || !Array.isArray(treeData)) return [];
    const result = [];
    const stack = [...treeData];
    while (stack.length) {
        const node = stack.pop();
        result.push(node);
        if (node && node.children && Array.isArray(node.children)) {
            stack.unshift(...node.children);
        }
    }
    return result;
}
