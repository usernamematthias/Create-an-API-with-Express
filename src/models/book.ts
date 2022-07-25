// @ts-ignore
import Client from "../database";

type Book = {
  id?: Number;
  title: string;
  totalPages: Number;
  author: string;
  type: string;
  summary: string;
};

class BookStore {
  async index(): Promise<Book[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM books";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`cannot get books ${e}`);
    }
  }
  async show(id: string): Promise<Book> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM books WHERE id=($1)";

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (err) {
      throw new Error(`Could not find book ${id}. Error: ${err}`);
    }
  }

  async create(b: Book): Promise<Book> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql =
        "INSERT INTO books (title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *";

      const result = await conn.query(sql, [b.title, b.author, b.totalPages, b.summary]);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not add new book ${b.title}. Error: ${err}`); // b.title correct?
    }
  }

  async delete(id: string): Promise<Book> {
    try {
      // @ts-ignore
      const conn = await Client.connect();

      const sql = "DELETE FROM books WHERE id=($1)";
      const result = await conn.query(sql, [id]);

      const book = result.rows[0];

      conn.release();

      return book;
    } catch (err) {
      throw new Error(`Could not delete book ${id}. Error: ${err}`);
    }
  }
}

export { Book, BookStore };
