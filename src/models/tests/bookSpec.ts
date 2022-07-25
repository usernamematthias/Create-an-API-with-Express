// // import { BookStore } from "../book";
// import { Book, BookStore } from "../book";

// const store = new BookStore();

// describe("something with books", () => {
//   it("should have an Index-Method", () => {
//     expect(store.index).toBeDefined();
//   });
//   // it("index returns a list of products", async () => {
//   //   const result = await store.index();
//   //   expect(result).toEqual([]);
//   // });

//   it("create method should add a book", async () => {
//     const result = await store.create({
//       title: "Bridge to Terabithia",
//       totalPages: 250,
//       author: "Katherine Paterson",
//       type: "Childrens",
//       summary: "nice Book"
//     });
//     expect(result).toEqual({
//       // id: "1",
//       title: "Bridge to Terabithia",
//       totalPages: 208,
//       author: "Katherine Paterson",
//       type: "Childrens",
//       summary: "nice Book"
//     });
//   });

//   it("index method should return a list of books", async () => {
//     const result = await store.index();
//     expect(result).toEqual([
//       {
//         // id: "1",
//         title: "Bridge to Terabithia",
//         totalPages: 208,
//         author: "Katherine Paterson",
//         type: "Childrens",
//         summary: "nice Book"
//       }
//     ]);
//   });

//   it("show method should return the correct book", async () => {
//     const result = await store.show("1");
//     expect(result).toEqual({
//       // id: "1",
//       title: "Bridge to Terabithia",
//       totalPages: 208,
//       author: "Katherine Paterson",
//       type: "Childrens",
//       summary: "nice Book"
//     });
//   });

//   it("delete method should remove the book", async () => {
//     store.delete("Bridge to Terabithia");
//     const result = await store.index();

//     expect(result).toEqual([]);
//   });
// });
