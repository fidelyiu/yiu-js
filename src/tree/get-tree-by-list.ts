import { TreeData, TreeParseIdFunc } from "../types/tree-type";

/**
 * 根据List生成Tree
 * @param list 数组
 * @param parentParseIdFunc 解析parentKey函数
 * @param parseIdFunc 解析key函数
 * @returns
 */
export default function treeGetTreeByList(list: TreeData) {
    // let parentParser = (d: { parentKey: string }) => d.parentKey;
    // let keyParser = (d: { key: string }) => d.key;
    // if (typeof parentParseIdFunc === "function") {
    //     parentParser = parentParseIdFunc;
    // }
    // if (typeof parseIdFunc === "function") {
    //     keyParser = parseIdFunc;
    // }
    // if (list) {
    // }
    // return [];
}

// function _treeGetTreeByList() {}
