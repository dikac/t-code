import CodeType from "../../boolean/string/code";
/**
 * Standard Error for not compatible with code
 */
export default function Code(string) {
    return new TypeError(CodeType(false, string));
}
//# sourceMappingURL=code.js.map