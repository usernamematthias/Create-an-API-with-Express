import express, { Request, Response } from "express";
import { User, UserStore } from "../models/user";

const store = new UserStore();
// const app = express();

const index = async (_req: Request, res: Response) => {
  // try {
  const users = await store.index();
  res.json(users);
  // res.send("this is the INDEX route");
  // } catch (e) {
  //   res.status(400);
  //   res.json(e);
  // }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await store.show(req.params.id);
    res.json(user);
    res.send("this is the SHOW route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const user: User = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password
    };
    const newUser = await store.create(user);
    res.json(newUser);
    res.send("this is the CREATE route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const users: User = {
      id: req.params.id as unknown as number,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password
    };
    res.json(users);
    res.send("this is the EDIT route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.params.id);
    res.send("this is the DELETE route");
    res.json(deleted);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const users_routes = (app: express.Application) => {
  app.get("/users", index);
  // app.get('/users/:id', verifyToken, show);
  app.get("/users/:id", show);
  app.post("/users", create);
  app.put("/users/:id", update),
    // app.post('/users/authenticate', authenticate)
    // app.delete('/users/:id', verifyToken, destroy)
    app.delete("/users/:id", destroy);
};

export default users_routes;
