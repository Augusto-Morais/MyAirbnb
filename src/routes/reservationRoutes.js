import express from "express";
import ReservationController from "../DB/Controllers/ReservationController.js";
import bodyParser from "body-parser";
 
const router = express.Router();

// router.get("/reservations", ReservationController.getReservations);
// router.get("/reservations/:id", ReservationController.getReservationById);
// router.post("/reservations", bodyParser.json(), ReservationController.createReservation);
// router.put("/reservations/:id", bodyParser.json(), ReservationController.updateReservation);
// router.delete("/reservations/:id", ReservationController.deleteReservation);

export default router;