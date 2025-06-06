const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next).catch((err) => next(err)))
    }  
}

export {asyncHandler}



//upaar wala aur niche wale dono functio ka kaam same ha bass alg tarike se likhe ha
//---------------------------------------------------------------------------------------------------------------------------------------------------------
/*Ye function asyncHandler ek higher-order function hai jo Express.js ke request handlers ko error handling ke saath wrap karta hai.
Iska kaam hai ki agar fn—jo ek async function hai—koi error throw kare,
toh wo error catch ho jaye aur ek structured JSON response ke through client ko proper error message mile.
next jo ha vo middleware ke liye kaam karta ha aak checking ke baad dusri checking ke liye next ho jao
*/
/*
const asyncHandler = (fn) => async (req,res,next) => {
    try{
        await fn(req,res,next)
    } catch(error){
        res.status(error.code || 500).json({
            success:false,
            message:error.message
        })
    }
}
    */