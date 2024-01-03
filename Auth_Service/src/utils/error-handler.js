const {StatusCodes}=require("http-status-codes")
class AppError extends Error{
    constructor(name,
        message='Something went wrong',
        explanation='Something went wrong',
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR
        ){
        super();
        this.message=message,
        this.explanation=explanation,
        this.statusCode=statusCode,
        this.name=name
    }
}
module.exports=AppError