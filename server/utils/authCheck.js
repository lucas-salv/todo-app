module.exports = (authUser, id) => {
    if(authUser.id != id){
        throw new Error(["400", "400 - Bad Request"]);
    }
}