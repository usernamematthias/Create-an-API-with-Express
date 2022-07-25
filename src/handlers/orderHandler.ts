import express, { Request, Response } from "express";
import { Order, OrderStore } from "../models/order";

const store = new OrderStore();

const index = async (_req: Request, res: Response) => {
  try {
    const orders = await store.index();
    res.json(orders);
    res.send("this is the INDEX route");
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const order = await store.show(req.params.id);
    res.json(order);
    res.send("this is the SHOW route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const order: Order = {
      product_id: req.body.product_id,
      product_qty: req.body.product_qty,
      user_id: req.body.user_id,
      status_complete: req.body.status_complete
    };
    const newOrder = await store.create(order);
    res.json(newOrder);
    res.send("this is the CREATE route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const orders: Order = {
      id: req.params.id as unknown as number,
      product_id: req.body.product_id,
      product_qty: req.body.product_qty,
      user_id: req.body.user_id,
      status_complete: req.body.status_complete
    };
    res.json(orders);
    res.send("this is the EDIT route");
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.body.id);
    res.send("this is the DELETE route");
    res.json(deleted);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const orders_routes = (app: express.Application) => {
  app.get("/orders", index);
  // app.get('/orders/:id', verifyToken, show);
  app.get("/orders/:id", show);
  app.post("/orders", create);
  app.put("/orders/:id", update),
    // app.post('/orders/authenticate', authenticate)
    // app.delete('/orders/:id', verifyToken, destroy)
    app.delete("/orders/:id", destroy);
};

export default orders_routes;
