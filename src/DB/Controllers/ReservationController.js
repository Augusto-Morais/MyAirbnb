import Rental from "../Models/Rental.js";
import Reservation from "../Models/Reservation.js";
import RentalController from "./RentalController.js";
import UserController from "./userController.js";

class ReservationController {
  static getReservations = async () => {
    let reservations = await Reservation.find();

    return reservations;
  };

  static getReservationById = async (id) => {

    try {
      const reservation = await Reservation.findById(id);
      
      return reservation;
    } catch (error) {
      return error;
    }
  };

  // static getReservationByTitle = (title) => {
  //   const reservation = Reservation.findOne({Title: title},"-_id");

  //   return reservation;
  // }

  static createReservationByRentalTitle = async (body) => {
    const rental = await RentalController.getRentalByTitle(body.Title);

    // const rentalId = re
    let result;

    let reservation = new Reservation({
      Rental: rental._id,
      Guests: body.Guests,
      CheckIn: body.CheckIn,
      CheckOut: body.CheckOut,
      CleaningCharge: body.CleaningCharge,
      MyAirbnbServiceCharge: body.MyAirbnbServiceCharge,
      TotalValue: body.TotalValue,
    });

    await reservation
      .save()
      .then((doc) => {
        result = doc;
      })
      .catch((err) => {
        result = err;
      });

    return result;
  };

  static createReservation = (req, res) => {
    let reservation = new Reservation({
      Rental: req.body.Rental,
      Guests: req.body.Guests,
      CheckIn: req.body.CheckIn,
      CheckOut: req.body.CheckOut,
      CleaningCharge: req.body.CleaningCharge,
      MyAirbnbServiceCharge: req.body.MyAirbnbServiceCharge,
      TotalValue: req.body.TotalValue,
    });

    reservation
      .save()
      .then((doc) => res.json(doc))
      .catch((err) => res.json(err));
  };

  static updateReservation = async (req, res) => {
    try {
      let id = req.params.id;

      let result = Reservation.updateOne(
        { _id: id },
        {
          $set: {
            Rental: req.body.Rental,
            Guests: req.body.Guests,
            CheckIn: req.body.CheckIn,
            CheckOut: req.body.CheckOut,
            CleaningCharge: req.body.CleaningCharge,
            MyAirbnbServiceCharge: req.body.MyAirbnbServiceCharge,
            TotalValue: req.body.TotalValue,
          },
        }
      );

      const docs = await result;

      res.json(docs);
    } catch (error) {
      res.json(error);
    }
  };

  static deleteReservationByDatesAndTotalValue = async (CheckIn, CheckOut ,TotalValue) => {
    // const users = await UserController.getUsers();
    
    // console.log(users);

    // return users;

    // const rental = await RentalController.getRentalById()
    

    try {
      const reservation = await Reservation.findOne({CheckIn: CheckIn, CheckOut: CheckOut, TotalValue: TotalValue});
      const docReservation = await Reservation.deleteOne({_id: reservation._id});
      const docUser = await UserController.deleteUserReservationsById(reservation._id);

      // // console.log(reservation._id);
      

      
      
      return {
        deletedReservationStatus: [docReservation,docUser]
      }
      // return result;
    } catch (error) {
      res.json(error);
    }
  };
}

export default ReservationController;
