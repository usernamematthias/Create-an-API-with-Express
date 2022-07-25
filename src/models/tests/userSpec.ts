import { User, UserStore } from "../user";

const store = new UserStore();

describe("something with user", () => {
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
    expect(store.delete).toBeDefined();
  });

  it("should have a delete method", () => {
    expect(store.delete).toBeDefined();
  });

  it("create method should add a user katherine Paterson", async () => {
    const result = await store.create({
      // id: 1,
      firstname: "Katherine",
      lastname: "Paterson",
      password: "password123"
    });
    expect(result).toEqual({
      id: 1,
      firstname: "Katherine",
      lastname: "Paterson",
      password: "password123"
    });
  });

  it("index method should return a list of users", async () => {
    const result = await store.index();
    expect(result).toEqual([
      {
        id: 1,
        firstname: "Katherine",
        lastname: "Paterson",
        password: "password123"
      }
    ]);
  });

  it("show method should return the correct user", async () => {
    const result = await store.show("1");
    expect(result).toEqual({
      id: 1,
      firstname: "Katherine",
      lastname: "Paterson",
      password: "password123"
    });
  });

  it("delete method should remove the user", async () => {
    store.delete("Paterson");
    const result = await store.index();

    expect(result).toEqual([]);
  });
});
