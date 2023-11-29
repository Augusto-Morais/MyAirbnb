import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema({
    Category: {type: mongoose.Schema.Types.String, required: true},
    Title: {type: mongoose.Schema.Types.String, required: true, unique: true},
    Location: {type: mongoose.Schema.Types.String, required: true},
    Images: {type: mongoose.Schema.Types.Array, required: true},
    OriginalLink: {type: mongoose.Schema.Types.String, required: true},
    PricePerNight: {type: mongoose.Schema.Types.Number, require: true}
});

const Rental = mongoose.model("Rental", RentalSchema);

export default Rental;