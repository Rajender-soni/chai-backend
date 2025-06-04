/*- Since ApiError extends Error, it inherits basic error properties like message and stack.
- statusCode: Stores the HTTP status code (e.g., 400 for Bad Request, 500 for Internal Server Error).
- message: Holds the error message, defaulting to "Something went wrong".
- errors: An array to store additional error details (e.g., validation issues).
- data: Defaults to null, possibly meant to store related data.
- success: Set to false, indicating an unsuccessful API response.
 */

class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    statck = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = this.errors;

    if(stack){
       this.stack= statck
    } else{
       Error.captureStackTrace(this,this.constructor)
    }
  }
}

export { ApiError };
