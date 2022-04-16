import { TreePropsOpt } from "../types/tree-type";

export default function getTreeDefaultProps(opt?: TreePropsOpt): Required<TreePropsOpt> {
    return Object.assign(
        {
            keyProp: "key",
            parentKeyProp: "parentKey",
            childrenProp: "children",
        },
        opt
    );
}
