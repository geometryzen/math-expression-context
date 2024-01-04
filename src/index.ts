import { Cons, U } from "math-expression-tree";

export interface ExprContext {
    getBinding(printname: string): U;
    setBinding(printname: string, binding: U): void;
    getUsrFunc(printname: string): U;
    setUsrFunc(printname: string, usrfunc: U): void;
}

/**
 * Here the first argument is the argument list and does not include the operator.
 */
export type LambdaExpr = (argList: Cons, $: ExprContext) => U;
