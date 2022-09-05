export const getTags = async (req, res, next) => {
    try {
      const getTags = await tags.find();
      res.status(200).json(getTags);
    } catch (err) {
      next(err);
    }
  };