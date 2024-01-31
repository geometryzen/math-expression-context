import { Sym } from "math-expression-atoms";
import { U } from "math-expression-tree";
import { ExprContext } from "../src/index";

class Foo implements ExprContext {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasBinding(sym: Sym): boolean {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    hasUserFunction(sym: Sym): boolean {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    valueOf(expr: U): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getBinding(sym: Sym): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setBinding(sym: Sym, binding: U): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getUserFunction(sym: Sym): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUserFunction(sym: Sym, usrfunc: U): void {
        throw new Error("Method not implemented.");
    }

}

test("ExprContext", function () {
    const foo = new Foo();
    expect(typeof foo).toBe("object");
});
