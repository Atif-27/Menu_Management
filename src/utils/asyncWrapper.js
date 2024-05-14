// ! This is a utility function that wraps an async function and catches any errors that occur during the execution of the function. It is used to avoid having to write try-catch blocks in every async route handler.
export default function asyncWrapper(func) {
  try {
    return async (req, res, next) => {
      await func(req, res, next);
    };
  } catch (error) {
    next(error);
  }
}
