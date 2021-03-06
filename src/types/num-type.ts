/**
 * 包含符号
 * - '[]'：包含最小值最大值。
 * - '[)'：包含最小值，不包含最大值。
 * - '(]'：不包含最小值，包含最大值。
 * - '()'：不包含最小值最大值。
 */
export type CompareType = "[]" | "[)" | "(]" | "()";
