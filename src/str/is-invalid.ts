import langIsStr from "../lang/is-str";
import strIsEmpty from "./is-empty";

/**
 * 判断是否是无效的字符串变量
 */
export default function strIsInvalid(str: string) {
    if (langIsStr(str)) {
        return strIsEmpty(str);
    }
    return false;
}
