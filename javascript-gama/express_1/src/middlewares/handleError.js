const { UnauthorizedError } = require("express-jwt")
const { ValidationError } = require("express-validation");
// O joi gera o erro, e aqui ele é captado para devolver como uma resposta
module.exports = (error, req, res, next) => {
    if(error instanceof ValidationError) {
        return res.status(error.statusCode).json(error);
    }

    if(error instanceof UnauthorizedError) {
        return res.status(error.status).json(error);
    }

    return res.status(500).json(error);
};