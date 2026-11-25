class ApiError extends Error {
 constructor(
    statusCode ,
    message = "Something wents Wrong",
    Errors = [],
    statck= ""
 ){
  super(message)
  this.Errors = Errors,
  this.message = message,
  this.data =data,
  this.success = false ,
  this.statusCode = statusCode

  if(statck){
    this.statck =statck
  }else{
   Error.captureStackTrace(this , this.constructor)
  }
 }
}

export{ApiError}