import categories from '../models/category.js'

export const getCategories = async (req, res, next) => {
    try {
      const getCategories = await categories.find();
      res.status(200).json(getCategories);
    } catch (err) {
      next(err);
    }
  };