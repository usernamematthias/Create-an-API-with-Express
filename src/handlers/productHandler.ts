import express, { Request, Response } from "express";
import { Product, ProductStore } from "../models/product";

const store = new ProductStore();

const index = async (_req: Request, res: Response) => {
  try {
    const products = await store.index();
    res.json(products);
    res.send("this is the INDEX route");
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const product = await store.show(req.params.id);
    res.json(product);
    res.send("this is the SHOW route");
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const product: Product = {
      name: req.body.name,
      price: req.body.price
    };
    const newProduct = await store.create(product);
    res.json(newProduct);
    res.send("this is the CREATE route");
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const products: Product = {
      id: req.params.id as unknown as number
      name: req.body.name,
      price: req.body.price
    };
    res.json(products);
    res.send("this is the EDIT route");
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const destroy = async (_req: Request, res: Response) => {
  try {
    const deleted = await store.delete(req.body.id);
    res.send("this is the DELETE route");
    res.json(deleted);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
};

const products_routes = app => {
  app.get("/products", index);
  // app.get('/products/:id', verifyToken, show);
  app.get("/products/:id", show);
  // app.post('/products', create)
  app.put("/products/:id", update),
    // app.post('/products/authenticate', authenticate)
    // app.delete('/products/:id', verifyToken, destroy)
    app.delete("/products/:id", destroy);
};

export default product_routes;
