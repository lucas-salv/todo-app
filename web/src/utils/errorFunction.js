export default function errorFunction(statusCode){
    switch (statusCode) {
        case 401 || 500:
            return true;
        default:
            break;
    }
}