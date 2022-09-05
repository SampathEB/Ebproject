import countries from "../models/country.js";

export const getcountries = async (req, res, next) => {
    try {
      const getCountries = await countries.find();
      res.status(200).json(getCountries);
    } catch (err) {
      next(err);
    }
  };