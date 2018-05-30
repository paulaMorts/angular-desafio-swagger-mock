exports.models = {
    "postSalvarRequest": {
        "id": "postSalvarRequest",
        "properties": {
            "nome": {
                "type": "string",
                "description": "Nome do usuário"
            },
			"data": {
                "type": "string",
                "description": "Data de Nascimento do usuário",
                "required": true
            },
            "sexo": {
                "type": "string",
                "description": "Sexo do usuário",
                "required": true
            }
        }
    }
};