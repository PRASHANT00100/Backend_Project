class ApiResponse{
    constructor( data , StatusCode, message ="success"){
        this.data =data,
        this.StatusCode = StatusCode,
        this.message = message,
        this.success = StatusCode < 400
    }
}

export{ApiResponse}