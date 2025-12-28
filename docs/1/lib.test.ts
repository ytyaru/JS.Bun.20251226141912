// bun test ./lib.test.ts
import { test, expect, describe } from "bun:test";
import {sayHello} from "./lib.ts";

describe("sayHello", () => {
  test("should return a greeting message with the given name", () => {
    const name = "World";
    const result = sayHello(name);
    expect(result).toBe("Hello, World !!");
  });

  test("should work with an empty string", () => {
    const name = "";
    const result = sayHello(name);
    expect(result).toBe("Hello,  !!");
  });
});

