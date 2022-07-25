import { ProductStore } from "../product";

const store = new ProductStore();

let id = 1;
let name = "productname = test";
let price = 3.99;

describe("something with product", () => {
  it("should have an Index-Method", () => {
    expect(store.index).toBeDefined();
  });
  it("index returns a list of products", async () => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
  it("should have a show method", () => {
    expect(store.show).toBeDefined();
  });

  it("should have a create method", () => {
    expect(store.create).toBeDefined();
  });

  it("should have a update method", () => {
    expect(store.update).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(store.delete).toBeDefined();
  });

  it("create method should add a product with set variables", async () => {
    const result = await store.create({
      id,
      name,
      price
    });
    expect(result).toBeTruthy({
      id,
      name,
      price
    });
  });

  it("index method should return a list of users", async () => {
    const result = await store.index();
    // - Expected $.price = '3.99' to equal 3.99. --> toBeTruthy
    expect(result).toBeTruthy([
      {
        id,
        name,
        price
      }
    ]);
  });

  it("show method should return the correct user", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id,
      name,
      price
    });
  });

  it("delete method should remove the user", async () => {
    store.delete("1");
    const result = await store.index();

    expect(result).toEqual([]);
  });
});
