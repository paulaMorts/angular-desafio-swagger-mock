exports.models = {
    "listaContatosItem": {
        "id": "listaContatosItem",
        "properties": {
            "nome": {
                "type": "string",
                "description": "Nome do usuário",
                "required": true
            },
            "data": {
                "type": "string",
                "description": "Data de nascimento do usuário",
                "required": true
            },
            "sexo": {
                "type": "string",
                "description": "Sexo do usuário",
                "required": true
            }
        }
    },
	"carregarListaContatosResponse": {
        "id": "carregarListaContatosResponse",
        "properties": {
            "listaContatos": {
                "type": "array",
                "items": {
                    "$ref": "listaContatosItem"
                },
                "description": "Lista de contatos",
                "required": true
            }
        }
    }
};