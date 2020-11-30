module.exports = (errorInfos, res) => {
    const [stCd, message] = errorInfos.split(',');
    const statusCode = Number(stCd);
    return res.status(statusCode).json({
        "message": message
    });
}