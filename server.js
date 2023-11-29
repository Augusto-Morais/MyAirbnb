import express from "express";
import RentalController from "./src/DB/Controllers/RentalController.js";
import "dotenv/config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import con from "./src/DB/connection.js";
// import routes from "./src/routes/index.js";
import ReservationController from "./src/DB/Controllers/ReservationController.js";
import UserController from "./src/DB/Controllers/userController.js";
import User from "./src/DB/Models/User.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const frontEndDir = path.join(__dirname, "/src/frontEnd");

// import express from "express";

const app = express();
const port = process.env.PORT || 3000;

con.on("error", console.error.bind(console, "connection error: "));
con.once("open", () => {
  console.log("Connected do Data Base");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

app.use(express.static(frontEndDir));

// routes(app);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  const results = await RentalController.getRentalsByCategory("Beach Houses");

  res.render(path.join(frontEndDir, "./views/pages/index.ejs"), {
    data: results,
  });
});

app.get("/room", async function (req, res) {
  const param = req.query.v;

  // const title = param.split("+").join(" ");

  const rental = await RentalController.getRentalByTitle(param);

  // res.send("'"+title+"'='"+param+"'");
  // res.send(rental);

  res.render(path.join(frontEndDir, "./views/pages/room.ejs"), {
    data: rental,
  });
});

app.get("/category", async function (req, res) {
  const category = req.query.v;

  let search;

  switch (category) {
    case "Beach":
      search = "Beach Houses";
      break;
    case "Cottage":
      search = "Cottage Houses";
      break;
    case "Beach":
      search = "Lake";
      break;
    case "TreeHouses":
      search = "Tree Houses";
      break;
    default:
      search = category;
      break;
  }

  const results = await RentalController.getRentalsByCategory(`${search}`);

  res.render(path.join(frontEndDir, "./views/pages/index.ejs"), {
    data: results,
  });
});

app.get("/reservations", async function (req, res) {
  // const reservations = await ReservationController.getReservations();
  // const reservationsMap = new Map();

  // for (const reservation of reservations) {
  //   const rental = await RentalController.getRentalById(reservation.Rental);

  //   reservationsMap.set(reservation, rental);
  // }
  const isReservationPost = req.query.reservationPost;

  const users = await UserController.getUsers();
  const sampleUser = users[0];
  const sampleUserReservationsIds = sampleUser.Reservations;
  const reservationsMap = new Map();

  // console.log(sampleUserReservationsIds);
  for (const reservationId of sampleUserReservationsIds) {
    // console.log(reservationId);
    const reservation = await ReservationController.getReservationById(reservationId);
    // console.log(reservation);
    const rental = await RentalController.getRentalById(reservation.Rental);

      reservationsMap.set(reservation, rental);
  }

  // console.log(reservationsMap);

  res.render(path.join(frontEndDir, "./views/pages/reservations.ejs"), {
    data: reservationsMap,
    isReservationPost: isReservationPost
  });
  // res.send("<p>Teste</p>")
});

app.post("/reservations", async function (req, res) {
  // res.send("Post on /reserve\n");
  const body = req.body;

  // console.log(body);
  const reservation =
    await ReservationController.createReservationByRentalTitle(body);
  // console.log(reservation);

  const user = await UserController.getUsers();
  await User.updateOne(
    { _id: user[0]._id },
    { $addToSet: { Reservations: reservation._id } }
  );

  // await ReservationController.getReservations();
  res.redirect("/reservations?reservationPost=true");
  //   const reservationsMap = new Map();
  //   // const rentals = [];
  //   // console.log(reservations);
  // // res.redirect("")
  //   for (const reservation of reservations) {
  //     const rental = await RentalController.getRentalById(reservation.Rental);
  //     // console.log(reservation.CheckIn.getDay,reservation.CheckIn.getMonth,reservation.CheckIn.getYear);

  //     console.log(rental.Title + ": " + reservation.CheckIn.getDay(),reservation.CheckIn.getMonth(),reservation.CheckIn.getFullYear());
  //     console.log(rental.Title + ": " +reservation.CheckOut.getDay(),reservation.CheckOut.getMonth(),reservation.CheckOut.getFullYear());
  //     reservationsMap.set(reservation, rental);
  //   }

  //   res.render(path.join(frontEndDir, "./views/pages/reservations.ejs"), {
  //     data: reservationsMap,
  //   });
  // console.log(reservation._id);
  // res.send(req.headers+"\n");
});

// app.get("/room", async function(req, res){

// })

app.delete("/users/reservations/", async (req,res) => {
  const query = req.query;
  // console.log(query);

  const value = await ReservationController.deleteReservationByDatesAndTotalValue(query.CheckIn, query.CheckOut, query.TotalValue);
  
  console.log(value);

  // console.log(value);
  // res.send({
  //   Status: "200 OK",
  // });
})
