import express from "express";
import { Report } from "../../../models/index.js";

const reportsRouter = new express.Router()

reportsRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.query().findOne({ id: id, userId: req.user.id })
    await Report.query().deleteById(id)
    return res.status(200).json({message: "Successfully Deleted"})
  } catch (error) {
    return res.status(500).json({ errors: error })
  }
})

export default reportsRouter;  

