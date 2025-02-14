export const errorHandler = (err, req, res, next) => {
  if (err) {
    console.error(err);
  }
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
};
