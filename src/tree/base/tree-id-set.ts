import { TreeBaseOpt } from "../../types/tree-type";
import getTreePropsValue from "./get-tree-props-value";

export default class TreeIdSet {
    idSet = new Set();

    push(node: any, opt?: TreeBaseOpt) {
        const id = getTreePropsValue(node, "id", opt);
        if (typeof id !== "undefined") {
            this.idSet.add(id);
        }
    }

    has(node: any, opt?: TreeBaseOpt): boolean {
        const id = getTreePropsValue(node, "id", opt);
        return this.idSet.has(id);
    }
}
