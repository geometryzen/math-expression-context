import { U } from "math-expression-tree";

export interface ExprContext {
    getBinding(printname: string): U;
    setBinding(printname: string, binding: U): void;
    getUsrFunc(printname: string): U;
    setUsrFunc(printname: string, usrfunc: U): void;
}