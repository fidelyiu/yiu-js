/**
 * YiuJs 是一个js的功能分类工具库，部分功能基于lodash分类重命名。
 */
// 所有类型文件
// 数字工具类型
import type * as NumType from "./types/num-type";
// 树工具类型
import type * as TreeType from "./types/tree-type";
export type { NumType, TreeType };

// js语言方面的工具
import langIsFinite from "./lang/is-finite";
import langIsInt from "./lang/is-int";
import langIsNumber from "./lang/is-number";
import langIsStr from "./lang/is-str";
export { langIsFinite, langIsInt, langIsNumber, langIsStr };

// number方面的工具
import numGetCeil from "./num/get-ceil";
import numGetFloor from "./num/get-floor";
import numGetRound from "./num/get-round";
import numIsInLineSegment from "./num/is-in-line-segment";
import numIsIntersect from "./num/is-intersect";
export { numGetCeil, numGetFloor, numGetRound, numIsInLineSegment, numIsIntersect };

// obj方面的工具
import objGetClone from "./obj/get-clone";
import objGetCloneDeep from "./obj/get-clone-deep";
export { objGetClone, objGetCloneDeep };

// string方面的工具
import strGetDelEnd from "./str/get-del-end";
import strGetFirst from "./str/get-first";
import strGetReverse from "./str/get-reverse";
import strIsBlank from "./str/is-blank";
import strIsContainSStr from "./str/is-contain-s-str";
import strIsContain from "./str/is-contain";
import strIsEmpty from "./str/is-empty";
import strIsEnd from "./str/is-end";
import strIsInvalid from "./str/is-invalid";
export { strGetDelEnd, strGetFirst, strGetReverse, strIsBlank, strIsContainSStr, strIsContain, strIsEmpty, strIsEnd, strIsInvalid };

// tree方面的工具
import treeGetFilterBySearch from "./tree/get-filter-by-search";
import treeGetFirstNodePathByLevel from "./tree/get-first-node-path-by-level";
import treeGetOneNodeBySearch from "./tree/get-one-node-by-search";
import treeGetOneNodePathBySearch from "./tree/get-one-node-path-by-search";
import treeHasBySearch from "./tree/has-by-search";
import treeOpAll from "./tree/op-all";
import treeOpByLevel from "./tree/op-by-level";
import treeOpBySearch from "./tree/op-by-search";
import treeToArray from "./tree/to-array";
export {
    treeGetFilterBySearch,
    treeGetFirstNodePathByLevel,
    treeGetOneNodeBySearch,
    treeGetOneNodePathBySearch,
    treeHasBySearch,
    treeOpAll,
    treeOpByLevel,
    treeOpBySearch,
    treeToArray,
};
