const { StatusCodes }=require("http-status-codes")
class ValidationError extends Error{
    constructor(error){
        let explanation=[];
        error.error.forEach(element => {
            explanation.push(element.message)
        });
        this.name="Validation Error",
        this.message="Not able to validate the data sent in the request",
        this.statusCode=StatusCodes.BAD_REQUEST
        this.explanation=explanation
    }
}
module.exports=ValidationError;