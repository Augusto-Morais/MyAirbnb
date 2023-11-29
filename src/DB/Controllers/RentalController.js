import Rental from "../Models/Rental.js";

class RentalController {
  static getRentals = async (req, res) => {
    try {
      const rentals = Rental.find();
      const docs = await rentals;

      res.json(docs);
    } catch (error) {
      res.json(error);
    }
  };

  static getRentalById = async (id) => {

    try {
      const rental = Rental.findById(id);
      const docs = await rental;

      return docs;
    } catch (error) {
      return error;
    }
  };

  static getRentalByTitle = async (title) =>{
    const rental = Rental.findOne({Title: title});

    return rental;
  }

  static getRentalsByCategory = async (category) => {
    const results = await Rental.find(
      { Category: category },
      "_id Category Title Location Images OriginalLink PricePerNight"
    );

    return results;
  };

  static createRental = (req, res) => {
    let rental = new Rental({
      Category: req.body.Category,
      Title: req.body.Title,
      Location: req.body.Location,
      Images: req.body.Images,
      OriginalLink: req.body.OriginalLink,
      PricePerNight: req.body.PricePerNight,
    });

    rental
      .save()
      .then((doc) => res.json(doc))
      .catch((err) => res.json(err));
  };

  static updateRental = async (req, res) => {
    try {
      let id = req.params.id;

      let result = Rental.updateOne(
        { _id: id },
        {
          $set: {
            Title: req.body.Title,
            Location: req.body.Location,
            OriginalLink: req.body.OriginalLink,
            PricePerNight: req.body.PricePerNight,
          },
          $addToSet: { Images: { $each: req.body.Images } },
        }
      );

      const docs = await result;

      res.json(docs);
    } catch (error) {
      res.json(error);
    }
  };

  static deleteRental = async (req, res) => {
    let id = req.params.id;

    try {
      const result = Rental.findByIdAndRemove(id);

      const docs = await result;

      res.json(docs);
    } catch (error) {
      res.json(error);
    }
  };
}

export default RentalController;
