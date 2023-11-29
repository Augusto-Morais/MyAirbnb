import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema({
    Rental: {type: mongoose.Schema.Types.ObjectId, ref: 'rentals',required: true},
    Guests: {type: mongoose.Schema.Types.Number, required: true},
    CheckIn: {type: mongoose.Schema.Types.Date, required: true},
    CheckOut: {type: mongoose.Schema.Types.Date, required: true},
    CleaningCharge: {type: mongoose.Schema.Types.Number, required: true},
    MyAirbnbServiceCharge: {type: mongoose.Schema.Types.Number, required: true},
    TotalValue: {type: mongoose.Schema.Types.Number, required: true}
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

export default Reservation;