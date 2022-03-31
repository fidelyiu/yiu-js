type TreeOtherData<T> = {
    [P in keyof Omit<T, "children">]: Omit<T, "children">[P];
};

export type TreeNode<T = Record<string, unknown>> = {
    children: TreeData<T>;
} & TreeOtherData<T>;

export type TreeData<T = Record<string, unknown>> = Array<TreeNode<T>>;

export type TreeSearchFunc<T = Record<string, unknown>> = (treeNode: TreeNode<T>) => boolean;
export type TreeOperationFunc<T = Record<string, unknown>> = (treeNode: TreeNode<T>) => void;
export type TreeFilterOption = {
    /**
     * 默认false，父节点是否必须 需要匹配
     */
    parentMatch?: boolean;
    /**
     * 默认false，子节点是否必须 需要匹配
     */
    childrenMatch?: boolean;
};
