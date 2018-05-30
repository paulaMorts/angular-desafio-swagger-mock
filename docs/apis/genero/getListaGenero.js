var paramTypes = require("swagger-node-express").paramTypes;
var _ = require('lodash');

module.exports = {
    spec: {
        description: "Retorna os generos.",
        path: "/genero/getListaGenero/",
        method: "GET",
        summary: "Retorna a lista de generos.",
        notes: "Retorna a lista de generos.",
        type: "carregarListaGeneroResponse",
        nickname: "getGenerosLista",
        produces: ["application/json"],
    },
    action: function (req, res) {
        var id = req.params.id;
        var dataReturn = [];
        var statusCode = 200;
        var generosList = [
            {"idGenero":"F", "description":"Feminino"},
            {"idGenero":"M", "description": "Masculino"}
        ];

        dataReturn = generosList;
        statusCode = 200;

        setTimeout(function () {
            res.status(statusCode).send(dataReturn);
        }, 300);
    }
};
