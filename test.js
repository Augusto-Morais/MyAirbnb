// import Rental from "./src/DB/Models/Rental.js";
import con from "./src/DB/connection.js";
import RentalController from "./src/DB/Controllers/RentalController.js";

con.on("error", console.error.bind(console, "connection error: "));
con.once("open", () => {
  console.log("Connected do Data Base");
});

const results = await RentalController.getRentalsByCategory("Beach Houses");
console.log(results);
console.log(results.length);

