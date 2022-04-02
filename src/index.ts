/**
 * YiuJs 是一个js的功能分类工具库，部分功能基于lodash分类重命名。
 */

// js语言方面的工具
import * as LangIs from "./lang/lang-is";
import * as LangGet from "./lang/lang-get";
export { LangIs, LangGet };

// number方面的工具
import * as NumIs from "./num/num-is";
import * as NumType from "./num/num-type";
export { NumIs, NumType };

// tree方面的工具
import * as TreeGet from "./tree/tree-get";
import * as TreeHas from "./tree/tree-has";
import * as TreeOp from "./tree/tree-op";
import * as TreeType from "./tree/tree-type";
export { TreeGet, TreeHas, TreeOp, TreeType };

// string方面的工具
import * as StrIs from "./str/str-is";
import * as StrGet from "./str/str-get";
export { StrIs, StrGet };
