import { Router } from "express";
const router = Router();

//Database connection
import { connect } from "../database";

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("portfolio").findOne({});
  res.json(result);
});

export default router;
