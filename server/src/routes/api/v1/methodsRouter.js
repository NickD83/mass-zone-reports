import express from 'express';
import { Method } from "../../../models/index.js"

const methodsRouter = new express.Router();

methodsRouter.get("/", async (req, res) => {
  try {
    const methods = await Method.query();
    return res.status(200).json({ methods })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
});

export default methodsRouter;