// @ts-ignore
import Client from "../database";

export type Product = {
  id?: Number;
  name: string;
  price: Number; // does it has 10.99 integrated?
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM products";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`cannot get products ${e}`);
    }
  }
  async show(id: string): Promise<Product> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM products WHERE id=($1)";

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (e) {
      throw new Error(`Could not find product ${id}. ${e}`);
    }
  }

  async create(p: Product): Promise<Product> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "INSERT INTO products (name, price) VALUES($1, $2) RETURNING *";

      const result = await conn.query(sql, [p.name, p.price]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (e) {
      throw new Error(`Could not add new product ${p.name}.  ${e}`);
    }
  }

  async delete(id: string): Promise<Product> {
    try {
      // @ts-ignore
      const conn = await Client.connect();

      const sql = "DELETE FROM products WHERE id=($1)";
      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (e) {
      throw new Error(`Could not delete products ${id}. ${e}`);
    }
  }
  async update(id: string): Promise<Product> {
    try {
      // @ts-ignore
      const conn = await Client.connect();

      const sql = "UPDATE products SET name ='irgendetwas' WHERE id=($1)";
      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (e) {
      throw new Error(`Could not update product ${id}. ${e}`);
    }
  }
}
