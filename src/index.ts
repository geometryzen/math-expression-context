import { Sym } from "math-expression-atoms";
import { Cons, U } from "math-expression-tree";

export type Sign = -1 | 0 | 1;
export const SIGN_LT = -1;
export const SIGN_EQ = 0;
export const SIGN_GT = 1;

export type CompareFn = (lhs: U, rhs: U) => Sign;

export interface ExprHandler<T extends U> {
    binL(lhs: T, opr: Sym, rhs: U, env: ExprContext): U;
    binR(rhs: T, opr: Sym, lhs: U, env: ExprContext): U;
    dispatch(expr: T, opr: Sym, argList: Cons, env: ExprContext): U;
    subst(expr: T, oldExpr: U, newExpr: U, env: Pick<ExprContext, 'handlerFor'>): U;
    test(expr: T, opr: Sym, env: ExprContext): boolean;
}

export interface ExprContext {
    clearBindings(): void;
    compareFn(opr: Sym): CompareFn;
    executeProlog(script: string[]): void;
    handlerFor<T extends U>(expr: T): ExprHandler<T>;
    hasBinding(opr: Sym, target: Cons): boolean;
    getBinding(opr: Sym, target: Cons): U;
    setBinding(opr: Sym, binding: U): void;
    hasUserFunction(name: Sym): boolean;
    getUserFunction(name: Sym): U;
    setUserFunction(name: Sym, usrfunc: U): void;
    defineUserSymbol(name: Sym): void;
    valueOf(expr: U): U;
    getDirective(directive: number): number;
    pushDirective(directive: number, value: number): void;
    popDirective(): void;
    getSymbolPrintName(sym: Sym): string;
}

/**
 * Here the first argument is the argument list and does not include the operator.
 */
export type LambdaExpr = (argList: Cons, $: ExprContext) => U;
