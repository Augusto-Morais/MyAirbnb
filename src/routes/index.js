import express from "express";
import userRoutes from "./userRoutes.js";
import rentalRoutes from "./rentalRoutes.js";
import reservationRoutes from "./reservationRoutes.js";

const routes = (app) => {
    app.use(express.json(),
    userRoutes,
    rentalRoutes,
    reservationRoutes)
};

export default routes;



