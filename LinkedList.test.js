const LinkedList = require("./LinkedList");

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("should insert a new node at the head of the list", () => {
    list.insertFirst(10);
    expect(list.head.data).toBe(10);
    expect(list.size).toBe(1);

    list.insertFirst(20);
    expect(list.head.data).toBe(20);
    expect(list.head.next.data).toBe(10);
    expect(list.size).toBe(2);
  });

  test("should insert a new node at the tail of the list", () => {
    list.insertLast(1);
    expect(list.head.data).toBe(1);
    expect(list.size).toBe(1);

    list.insertLast(2);
    expect(list.head.next.data).toBe(2);
    expect(list.size).toBe(2);
  });

  test("should insert a new node at a given index", () => {
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);
    list.insertAt(4, 1);

    expect(list.head.data).toBe(3);
    expect(list.head.next.data).toBe(4);
    expect(list.head.next.next.data).toBe(2);
    expect(list.size).toBe(4);

    expect(() => insertAt(-1, 4).toThrow("Index out of bounds"));
  });

  test("should throw an error when inserting at an out-of-bounds index", () => {
    expect(() => list.insertAt(1, 1)).toThrow("Index out of bounds");
  });

  test("should get a node at a specific index", () => {
    list.insertFirst(1);
    list.insertFirst(2);
    list.insertFirst(3);

    const node = list.getAt(1);
    expect(node.data).toBe(2);

    expect(() => list.getAt(-1)).toThrow("Index out of bounds");
    expect(() => list.getAt(5)).toThrow("Index out of bounds");
  });
});
