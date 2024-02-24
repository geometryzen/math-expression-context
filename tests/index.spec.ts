import { Sym } from "math-expression-atoms";
import { Cons, U } from "math-expression-tree";
import { CompareFn, ExprContext, ExprHandler } from "../src/index";

class FauxAtomHandler implements ExprHandler<U> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    binL(lhs: U, opr: Sym, rhs: U, env: ExprContext): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    binR(rhs: U, opr: Sym, lhs: U, env: ExprContext): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dispatch(expr: U, opr: Sym, argList: Cons, env: ExprContext): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    subst(expr: U, oldExpr: U, newExpr: U, env: Pick<ExprContext, 'handlerFor'>): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    test(expr: U, opr: Sym, env: ExprContext): boolean {
        throw new Error("Method not implemented.");
    }
}

class FauxContext implements ExprContext {
    #stateMap: Map<string, unknown> = new Map();
    constructor() {
        // Nothing to see here.
    }
    hasState(key: string): boolean {
        return this.#stateMap.has(key);
    }
    getState(key: string): unknown {
        if (this.#stateMap.has(key)) {
            return this.#stateMap.get(key);
        }
        else {
            throw new Error();
        }
    }
    setState(key: string, value: unknown): void {
        this.#stateMap.set(key, value);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getSymbolPrintName(sym: Sym): string {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handlerFor<T extends U>(expr: T): ExprHandler<T> {
        return new FauxAtomHandler();
    }
    clearBindings(): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    compareFn(opr: Sym): CompareFn {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    executeProlog(script: string[]): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasBinding(opr: Sym, target: Cons): boolean {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasUserFunction(name: Sym): boolean {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    valueOf(expr: U): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getBinding(opr: Sym, target: Cons): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setBinding(name: Sym, binding: U): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getUserFunction(name: Sym): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserFunction(name: Sym, usrfunc: U): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defineUserSymbol(name: Sym): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getDirective(directive: number): number {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    pushDirective(directive: number, value: number): void {
        throw new Error("Method not implemented.");
    }
    popDirective(): void {
        throw new Error("Method not implemented.");
    }
}

test("ExprContext", function () {
    const foo = new FauxContext();
    expect(typeof foo).toBe("object");
});
