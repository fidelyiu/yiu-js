type TreeOtherData<T> = {
    [P in keyof Omit<T, "children">]: Omit<T, "children">[P];
};

/**
 * 树节点类型
 */
export type TreeNode<T = Record<string, unknown>> = {
    /**
     * 子树
     */
    children: TreeData<T>;
} & TreeOtherData<T>;

/**
 * 树类型
 */
export type TreeData<T = Record<string, unknown>> = Array<TreeNode<T>>;

/**
 * 树的搜索函数类型
 */
export type TreeSearchFunc<T = Record<string, unknown>> = (treeNode: TreeNode<T>) => boolean;
/**
 * 树的操作函数类型
 */
export type TreeOperationFunc<T = Record<string, unknown>> = (treeNode: TreeNode<T>) => void;
/**
 * 树的过滤配置类型
 */
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
