var paramTypes = require("swagger-node-express").paramTypes;
var _ = require('lodash');

module.exports = {
    spec: {
        description: "Retorna a contatos.",
        path: "/contatos/getLista/",
        method: "GET",
        summary: "Retorna a lista de contatos.",
        notes: "Retorna a lista de contatos.",
        type: "carregarListaContatosResponse",
        nickname: "getContatosLista",
        produces: ["application/json"],
    },
    action: function (req, res) {
        var dataReturn = [];
        var statusCode = 200;
        var contatoList = [
            {"id": 1, "nome": "Isabella Cacélia Vicente", "data_nascimento": "1996-05-20", "sexo":"Feminino"},
            {"id": 2, "nome": "Edjan Sousa Santos", "data_nascimento": "1989-08-08", "sexo": "Masculino"},
            {"id": 3, "nome": "Paula Fernandes", "data_nascimento": "1991-03-22", "sexo": "Feminino"},
            {"id": 4, "nome": "Marcos", "data_nascimento": "1974-01-01", "sexo": "Masculino"},
            {"id": 5, "nome": "Dupin", "data_nascimento": "1996-10-25", "sexo": "Masculino"},
            {"id": 6, "nome": "Pamela", "data_nascimento": "1997-11-10", "sexo": "Feminino"},
        ];

        dataReturn = contatoList;
        statusCode = 200;

        setTimeout(function () {
            res.status(statusCode).send(dataReturn);
        }, 300);
    }
};
