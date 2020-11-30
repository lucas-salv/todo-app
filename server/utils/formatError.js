module.exports = (errorInfos, res) => {
    const [stCd, message] = errorInfos.split(',');
    const statusCode = Number(stCd);
    if(isNaN(statusCode)){
        return res.status(500).json({
            "message": "500 - Internal Server Error"
        });
    }
    return res.status(statusCode).json({
        "message": message
    });
}