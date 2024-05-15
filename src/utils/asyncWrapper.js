// ! This is a utility function that wraps an async function and catches any errors that occur during the execution of the function. It is used to avoid having to write try-catch blocks in every async route handler.
const asyncWrapper = (passedFunction) => {
  return async (req, res, next) => {
    try {
      await passedFunction(req, res, next);
    } catch (error) {
      if (error.code === 11000) {
        const key = Object.keys(error.keyValue)[0];
        error.message = key + " already exists";
        error.statusCode = 400;
      }
      next(error);
    }
  };
};

export default asyncWrapper;
