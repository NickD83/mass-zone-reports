import express from "express";
import { MassZone } from "../../../models/index.js";
import massZoneReportsRouter from "./massZoneReportsRouter.js";

const massZonesRouter = new express.Router();

massZonesRouter.get("/", async (req, res) => {
  try {
    const massZones = await MassZone.query();
    return res.status(200).json({ massZones })
  } catch (err) {
    return res.status(500).json({ errors: err })
  }
});

massZonesRouter.get("/:id", async (req, res) => {
  try {
    const massZone = await MassZone.query().findById(req.params.id)
    return res.status(200).json({ massZone })
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

massZonesRouter.use("/:massZone.id/reports", massZoneReportsRouter)

export default massZonesRouter;