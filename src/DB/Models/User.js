import mongoose from "mongoose";


const UserSchema = new mongoose.Schema(
    {
        UserName: {type: mongoose.Schema.Types.String, required: true},
        Reservations: {type: mongoose.Schema.Types.Array, required: true}
    }
);

const Person = mongoose.model("User", UserSchema);

export default Person;