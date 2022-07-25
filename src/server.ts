import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import user_routes from "./handlers/userHandler";

const app = express();
const address: string = "0.0.0.0:3000";

// const corsOptions = {
//   origin: "http://localhost:3000",
//   optionSuccessfulStatus: 200
// };
app.use(cors()); //
app.use(bodyParser.json());

app.get("/", function (_req: Request, res: Response, _next: express.NextFunction) {
  res.send("Hello World!");
});
app.get(
  "/test-cors",
  cors(),
  function (_req: Request, res: Response, _next: express.NextFunction) {
    res.json({ msg: "this CORS is enabled with middleware" });
  }
);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

user_routes(app);
export default app;
