import { U } from "math-expression-tree";
import { ExprContext } from "../src/index";

class Foo implements ExprContext {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getBinding(printname: string): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setBinding(printname: string, binding: U): void {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getUsrFunc(printname: string): U {
        throw new Error("Method not implemented.");
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setUsrFunc(printname: string, usrfunc: U): void {
        throw new Error("Method not implemented.");
    }

}

test("ExprContext", function () {
    const foo = new Foo();
    expect(typeof foo).toBe("object");
});
