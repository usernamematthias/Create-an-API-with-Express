// @ts-ignore
import Client from "../database";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const { pepper, saltRounds } = process.env;

export type User = {
  id?: Number;
  firstname: string;
  lastname: string;
  username: string;
  password?: string;
  password_digest?: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM users";
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (e) {
      throw new Error(`cannot get users ${e}`);
    }
  }
  async show(id: string): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "SELECT * FROM users WHERE id=($1)";

      const result = await conn.query(sql, [id]);

      conn.release();

      return result.rows[0];
    } catch (e) {
      throw new Error(`Could not find user ${id}. Error: ${e}`);
    }
  }

  async create(u: User): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql =
        "INSERT INTO users (firstname, lastname, username, password_digist) VALUES($1, $2, $3, $4) RETURNING *";

      const hashedPassword = bcrypt.hashSync(
        u.password + pepper,
        parseInt(saltRounds as unknown as string)
      );

      const result = await conn.query(sql, [u.username, hashedPassword]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (e) {
      throw new Error(
        `Could not add new user ${(u.firstname, u.lastname, u.username)}. Error: ${e}`
      );
    }
  }

  async delete(id: string): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect();
      const sql = "DELETE FROM users WHERE lastname=($1)";

      const result = await conn.query(sql, [id]);

      const user = result.rows[0];

      conn.release();

      return user;
    } catch (e) {
      throw new Error(`Could not delete user ${id}. Error: ${e}`);
    }
  }
  async update(id: string): Promise<User> {
    try {
      // @ts-ignore
      const conn = await Client.connect();

      const sql = "UPDATE users SET firstname ='irgendetwas' WHERE id=($1)";
      const result = await conn.query(sql, [id]);

      const product = result.rows[0];

      conn.release();

      return product;
    } catch (e) {
      throw new Error(`Could not update product ${id}. ${e}`);
    }
  }
  // async authenticate(username: string, password: string): Promise<User | null> {
  //   //@ts-ignore
  //   const conn = await Client.connect();
  //   const sql = "SELECT password_digest FROM users WHERE username=($1)";

  //   const result = await conn.query(sql, [username]);

  //   console.log(password + pepper);

  //   if (result.rows.length) {
  //     const user = result.rows[0];

  //     console.log(user);

  //     if (bcrypt.compareSync(password + pepper, user.password_digest)) {
  //       return user;
  //     }
  //   }

  //   return null;
  // }
}
