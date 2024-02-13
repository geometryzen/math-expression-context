import { Sym } from "math-expression-atoms";
import { Atom, Cons, U } from "math-expression-tree";

export type Sign = -1 | 0 | 1;
export const SIGN_LT = -1;
export const SIGN_EQ = 0;
export const SIGN_GT = 1;

export type CompareFn = (lhs: U, rhs: U) => Sign;

export interface AtomHandler<A extends Atom> {
    dispatch(atom: A, opr: Sym): U;
    subst(atom: A, oldExpr: U, newExpr: U, env: ExprContext): U;
    valueOf(atom: A, env: ExprContext): U;
}

export interface ExprContext {
    clearBindings(): void;
    compareFn(opr: Sym): CompareFn;
    executeProlog(script: string[]): void;
    handlerFor<A extends Atom>(atom: A): AtomHandler<A>;
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
}

/**
 * Here the first argument is the argument list and does not include the operator.
 */
export type LambdaExpr = (argList: Cons, $: ExprContext) => U;
