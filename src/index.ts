import { Sym } from "math-expression-atoms";
import { Cons, U } from "math-expression-tree";

export interface ExprContext {
    getBinding(sym: Sym): U;
    getUsrFunc(sym: Sym): U;
    isConsSymbol(sym: Sym): boolean;
    isUserSymbol(sym: Sym): boolean;
    setBinding(sym: Sym, binding: U): void;
    setUsrFunc(sym: Sym, usrfunc: U): void;
    valueOf(expr: U): U;
}

/**
 * Here the first argument is the argument list and does not include the operator.
 */
export type LambdaExpr = (argList: Cons, $: ExprContext) => U;
