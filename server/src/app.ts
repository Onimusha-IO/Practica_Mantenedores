import express from "express";
import cors from "cors";

import * as routes from "./routes";

class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use(express.urlencoded({ extended: false }));
  }

  routes() {
    this.server.use("/api/user", routes.UserRouter);
    this.server.use("/api/dough", routes.DoughRouter);
    this.server.use("/api/cream", routes.CreamRouter);
    this.server.use("/api/shape", routes.ShapeRouter);
  }
}

export default new App().server;
