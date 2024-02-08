import { Sym } from "math-expression-atoms";
import { Cons, U } from "math-expression-tree";

export interface ExprContext {
    clearBindings(): void;
    executeProlog(script: string[]): void;
    hasBinding(name: Sym): boolean;
    getBinding(name: Sym): U;
    setBinding(name: Sym, binding: U): void;
    hasUserFunction(name: Sym): boolean;
    getUserFunction(name: Sym): U;
    setUserFunction(name: Sym, usrfunc: U): void;
    defineUserSymbol(name: Sym): void;
    valueOf(expr: U): U;
    getDirective(directive: number): number;
    pushDirective(directive: number, value: number): void;
    popDirective(): void;
}

/**
 * Here the first argument is the argument list and does not include the operator.
 */
export type LambdaExpr = (argList: Cons, $: ExprContext) => U;
