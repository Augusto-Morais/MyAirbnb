import User from "../Models/User.js";

class UserController {
  static getUsers = async () => {
    try {
      const users = await User.find();
      
      
      return users;
    } catch (error) {
      return error;
    }
  };



  

  static getUserById = async (req, res) => {
    const id = req.params.id;

    try {
      const user = User.findById(id);
      const docs = await user;

      res.json(docs);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  static createUser = (req, res) => {
    let user = new User({
      Email: req.body.Email,
      Password: req.body.Password,
      Reservations: req.body.Reservations,
    });

    user
      .save()
      .then((doc) => res.json(doc))
      .catch((err) => res.json(err));
  };

  static updateUser = async (req, res) => {
    try {
      let id = req.params.id;

      let result = User.updateOne(
        { _id: id },
        {
          $set: { Email: req.body.Email, Password: req.body.Password },
          $addToSet: { Reservations: { $each: req.body.Reservations } },
        }
      );

      const docs = await result;

      res.json(docs);
    } catch (error) {
      res.json(error);
    }
  };

  // static deleteReservationBy = async ()

  static deleteUser = async (req, res) => {
    let id = req.params.id;

    try {
      const result = User.findByIdAndRemove(id);

      const docs = await result;

      res.json(docs);
    } catch (error) {
      res.json(error);
    }
  };

  static deleteUserReservationsById = async (ReservationId) => {
    const result = await User.findOne().updateMany({$pull: {Reservations: ReservationId}});
    return result;
  }
}

export default UserController;
