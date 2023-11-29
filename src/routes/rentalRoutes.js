import express from "express";
import RentalController from "../DB/Controllers/RentalController.js";
import bodyParser from "body-parser";

const router = express.Router();

// router.get("/rentals", RentalController.getRentals);
// router.get("/rentals/:id", RentalController.getRentalById);
// router.post("/rentals", bodyParser.json(), RentalController.createRental);
// router.put("/rentals/:id", bodyParser.json(), RentalController.updateRental);
// router.delete("/rentals/:id", RentalController.deleteRental);

export default router;