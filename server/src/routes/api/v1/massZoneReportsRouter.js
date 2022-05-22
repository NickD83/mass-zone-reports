import express from "express";
import { Report } from "../../../models/index.js";
import { ValidationError } from "objection";

const massZoneReportsRouter = new express.Router({ mergeParams: true });

massZoneReportsRouter.post("/", async (req, res) => {
  const { massZoneId } = req.params;
  try {
    const report = await Report.query().insertAndFetch({
      massZoneId: massZoneId,
      userId: req.user.id,
    });
    return res.status(201).json({ report });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
})


export default massZoneReportsRouter;