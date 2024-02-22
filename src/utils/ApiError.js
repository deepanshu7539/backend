class ApiError extends Error {
    constructor(
        statusCode,
        message= "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCodem = statusCode
        this.data = null
        this.data.message = message
        this.success = false;
        this.error = error

        if(statck){
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}