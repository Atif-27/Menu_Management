// ! This is a class to handle the response of the API in a consistent way. It takes in a status code, a message, and data as arguments and sets them as properties on the class instance. This will allow us to send a consistent response format from the API.
export default class ExpresResponse {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
