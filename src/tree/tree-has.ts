import { TreeData, TreeSearchFunc } from "./tree-type";

export function hasBySearch(treeData: TreeData, scFunc: TreeSearchFunc): boolean {
    if (typeof scFunc !== "function" || !treeData || !treeData.length) {
        return false;
    }
    for (const treeNode of treeData) {
        if (scFunc(treeNode)) {
            return true;
        }
        if (treeNode.children && treeNode.children.length && hasBySearch(treeNode.children, scFunc)) {
            return true;
        }
    }
    return false;
}
