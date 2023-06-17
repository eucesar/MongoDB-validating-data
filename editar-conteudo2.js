db.runCommand( { collMod: "contas",
     validator:{
          $jsonSchema: {
            bsonType: "object",
                        "additionalProperties": false,
            required: [ "Numero_Conta", "Tipo", "CPF"],
            properties: {
               "Numero_Conta": {
                  bsonType: "string",
                  description: "Informe corretamente o numero da conta"
               },
               Tipo: {
                  enum: [ "Conta corrente", "Conta poupança", "Conta salário" ],
                  description: "informe corretamente o tipo da conta"
               },
               CPF: {
                  bsonType: "string" ,
                  minLength:14,
                  maxLength: 14,  
                  description: "O CPF do cliente deve ser informado"
                 },
                Valor:{
                    bsonType: "double",
                    description: "informe corretamente o valor da conta"
                }, 
                Agência:{
                    bsonType: "string",
                    description: "informe corretamente a Agência"}
                }
            }
        },

            validationAction: "warn"

        })


