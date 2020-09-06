import { Router } from "express";
const router = Router();

//Database connection
import { connect } from "../database";
import { ObjectID } from "mongodb";

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("portfolio").find({}).toArray();
  res.json(result);
});

router.post("/", async (req, res) => {
  const db = await connect();
  const myData = req.body;
  const result = await db.collection("portfolio").insertOne(myData);
  res.json(result.ops[0]);
});

router.get("/:id", async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  const result = await db
    .collection("portfolio")
    .findOne({ _id: ObjectID(id) });
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const db = await connect();
  const { id } = req.params;
  const result = await db
    .collection("portfolio")
    .deleteOne({ _id: ObjectID(id) });
  res.json({
    message: `Objeto eliminado: ID: ${id}`,
  });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const db = await connect();
  const result = await db
    .collection("portfolio")
    .updateOne({ _id: ObjectID(id) }, { $set: newData });
  res.json({
    message: `Objeto actualizado: ID: ${id}`,
  });
});

export default router;
