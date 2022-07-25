//gelehrt bei udacity!
// @ts-ignore
import Client from "../database";

export type Order = {
  id?: Number;
  product_id: string;
  product_qty: string;
  user_id?: string;
  status_complete: boolean;
};

export class OrderStore {
  async index(): Promise<Order[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`cannot get orders ${e}`);
    }
  }
  async show(id: string): Promise<Order> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM orders WHERE id=($1)";

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (e) {
      throw new Error(`Could not find order ${id}. ${e}`);
    }
  }

  async create(o: Order): Promise<Order> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql =
        "INSERT INTO orders (product_id, product_qty, user_id, status_complete) VALUES($1, $2, $3, $4) RETURNING *";

      const result = await conn.query(sql, [
        o.product_id,
        o.product_qty,
        o.user_id,
        o.status_complete
      ]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (e) {
      throw new Error(`Could not add new order ${o.product_id}. ${e}`);
    }
  }

  async delete(id: string): Promise<Order> {
    try {
      const sql = "DELETE FROM orders WHERE id=($1)";
      // @ts-ignore
      const conn = await Client.connect();

      const result = await conn.query(sql, [id]);

      const order = result.rows[0];

      conn.release();

      return order;
    } catch (e) {
      throw new Error(`Could not delete order ${id}. ${e}`);
    }
  }
  async update(id: string): Promise<Order> {
    try {
      // @ts-ignore
      const conn = await Client.connect();

      const sql = "UPDATE orders SET status_complete = false WHERE id=($1)";
      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (e) {
      throw new Error(`Could not update product ${id}. ${e}`);
    }
  }
}
