// ! This is a custom error class that extends the built-in Error class. It takes in a message and a status code as arguments and sets them as properties on the class instance. This will allow us to throw an instance of this class and have the message and status code available to us in the error handler.
export default class ExpressError extends Error {
  constructor(statusCode, message) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}
