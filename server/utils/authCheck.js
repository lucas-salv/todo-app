module.exports = (req) => {
    if(req.auth.id != req.params.user_id){
        throw new Error(["400", "400 - Bad Request"]);
    }
}