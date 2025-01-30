const Stack = require("./Stack");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("should create an empty stack", () => {
    expect(stack.size).toBe(0);
    expect(stack.stack).toEqual([]);
  });

  it("should add an element to the stack", () => {
    stack.push(1);
    expect(stack.size).toBe(1);
    expect(stack.stack).toEqual([1]);
  });

  it("should remove an element from the stack", () => {
    stack.push(1);
    expect(stack.pop()).toBe(1);
    expect(stack.size).toBe(0);
    expect(stack.stack).toEqual([]);
  });

  it("should get the element at the top of the stack", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
    expect(stack.size).toBe(2);
    expect(stack.stack).toEqual([1, 2]);
  });

  it("should check if the stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  it("should get the size of the stack", () => {
    expect(stack.size).toBe(0);
    stack.push(1);
    expect(stack.size).toBe(1);
  });
});
