exports.models = {
    "listaGeneroItem": {
        "id": "listaGeneroItem",
        "properties": {
            "idGenero": {
                "type": "string",
                "description": "Id do genero",
                "required": true
            },
            "description": {
                "type": "string",
                "description": "Descrição do genero",
                "required": true
            },
        }
    },
	"carregarListaGeneroResponse": {
        "id": "carregarListaGeneroResponse",
        "properties": {
            "listaGenero": {
                "type": "array",
                "items": {
                    "$ref": "listaGeneroItem"
                },
                "description": "Lista de generos",
                "required": true
            }
        }
    }
};