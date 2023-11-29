import express from "express";
import UserController from "../DB/Controllers/UserController.js";
import bodyParser from "body-parser";

const router = express.Router();

router.get("/users",UserController.getUsers);
router.get("/users/:id",UserController.getUserById);
router.put("/users/:id",bodyParser.json(),UserController.updateUser);
router.post("/users", bodyParser.json(), UserController.createUser);
router.delete("/users/:id", UserController.deleteUser);

export default router;