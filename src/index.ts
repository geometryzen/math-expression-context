import { Sym } from "math-expression-atoms";
import { Cons, U } from "math-expression-tree";

export interface ExprContext {
    hasBinding(sym: Sym): boolean;
    getBinding(sym: Sym): U;
    setBinding(sym: Sym, binding: U): void;
    hasUserFunction(sym: Sym): boolean;
    getUserFunction(sym: Sym): U;
    setUserFunction(sym: Sym, usrfunc: U): void;
    valueOf(expr: U): U;
}

/**
 * Here the first argument is the argument list and does not include the operator.
 */
export type LambdaExpr = (argList: Cons, $: ExprContext) => U;
