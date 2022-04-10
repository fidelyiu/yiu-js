import type { TreeData, TreeSearchFunc } from "../types/tree-type";

export default function treeHasBySearch(treeData: TreeData, scFunc: TreeSearchFunc): boolean {
    if (typeof scFunc !== "function" || !treeData || !treeData.length) {
        return false;
    }
    for (const treeNode of treeData) {
        if (scFunc(treeNode)) {
            return true;
        }
        if (treeNode.children && treeNode.children.length && treeHasBySearch(treeNode.children, scFunc)) {
            return true;
        }
    }
    return false;
}
