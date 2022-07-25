import { Order, OrderStore } from "../order";

const store = new OrderStore();

const product_id = "1";
const product_qty = "2";
const user_id = "3";
const status_complete = false;

describe("something with order", () => {
  it("should have an Index-Method", () => {
    expect(store.index).toBeDefined();
  });
  it("index returns a list of orders", async () => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
  it("should have a show method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have a create method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have a update method", () => {
    expect(store.index).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(store.index).toBeDefined();
  });

  it("create method should add a order with set variables", async () => {
    const result = await store.create({
      // id: 1,
      product_id,
      product_qty,
      user_id,
      status_complete
    });
    expect(result).toEqual({
      // id: 1,
      product_id,
      product_qty,
      user_id,
      status_complete
    });
  });

  it("index method should return a list of users", async () => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 1,
        product_id,
        product_qty,
        user_id,
        status_complete
      }
    ]);
  });

  it("show method should return the correct user", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      product_id,
      product_qty,
      user_id,
      status_complete
    });
  });

  it("delete method should remove the user", async () => {
    store.delete("1");
    const result = await store.index();

    expect(result).toEqual([]);
  });
});
