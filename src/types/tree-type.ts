/**
 * 树节点类型
 */
export type TreeNode = {
    /**
     * 子树
     */
    children: TreeData;
    [key: string]: any;
};

/**
 * 树类型
 */
export type TreeData = Array<TreeNode>;

export type TreeParseIdFunc = (d: any) => string;

/**
 * 树的搜索函数类型
 */
export type TreeSearchFunc = (treeNode: TreeNode) => boolean;
/**
 * 树的操作函数类型
 */
export type TreeOperationFunc = (treeNode: TreeNode) => void;
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
    deepCloneFunc?: Function;
};

export type TreePropsOpt = {
    keyProp?: string;
    parentKeyProp?: string;
    childrenProp?: string;
};
