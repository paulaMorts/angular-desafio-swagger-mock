var paramTypes = require("swagger-node-express").paramTypes;

module.exports = {
    spec: {
        description: "Efetua a gravação do contato",
        path: "/contatos/postSalvar",
        method: "POST",
        summary: "Efetua a gravação do contato",
        notes: "Recebe as informações para criação de novo contato e armazena na mock.",
        type: "postSalvarRequest",
        nickname: "postSalvar",
        produces: ["application/json"],
        parameters: [paramTypes.body("postSalvarRequest", "Dados de contato", "postSalvarRequest")],
        errorResponses: [
            {
                code: "101",
                reason: "Data Nascimento não permitida!",
                responseModel: "postSalvarResponse"
            },
        ]
    },
    action: function (req, res) {
        var dataNascimento = String(req.body.data_nascimento);
        //alterar depois
        if (req.body.data < "18") {
            res.status(500).send({
                error: {
                    code: "101",
                    message: "Data Nascimento não permitida!"
                }
            });
        }
    }
};
