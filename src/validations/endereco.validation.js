const enderecoValidation = {

    validate(data){
        let validatedObj = {
            isValid: true,
            cepEndereco: {
                value: data.cepEndereco,
                valid: true,
                error: ''
            },
            logradouroEndereco: {
                value: data.logradouroEndereco,
                valid: true,
                error: ''
            },
            numeroEndereco: {
                value: data.numeroEndereco,
                valid: true,
                error: ''
            },
            bairroEndereco: {
                value: data.bairroEndereco,
                valid: true,
                error: ''
            },
            zonaEndereco: {
                value: data.zonaEndereco,
                valid: true,
                error: ''
            },
            cidadeEndereco: {
                value: data.cidadeEndereco,
                valid: true,
                error: ''
            },
            estadoEndereco: {
                value: data.estadoEndereco,
                valid: true,
                error: ''
            }
        };
        //CEP section
        if(data.cepEndereco.length !== 8){
            validatedObj.isValid = false;
            validatedObj.cepEndereco.valid = false;
            validatedObj.cepEndereco.error = 'O campo CEP deve conter 8 digitos!';
        };
        if (!data.cepEndereco) {
            validatedObj.isValid = false;
            validatedObj.cepEndereco.valid = false;
            validatedObj.cepEndereco.error = 'O campo CEP é obrigatório';
        };

        //Logradouro section
        if(data.logradouroEndereco.length < 6 || data.logradouroEndereco.length > 200){
            validatedObj.isValid = false;
            validatedObj.logradouroEndereco.valid = false;
            validatedObj.logradouroEndereco.error =  'O campo logradouro deve ter entre 6 e 200 caracteres!';
        };

        //Number section
        if (data.numeroEndereco.length > 5) {
            validatedObj.isValid = false;
            validatedObj.numeroEndereco.valid = false;
            validatedObj.numeroEndereco.error =  'O campo numero deve ter no máximo 5 caracteres';
        };
        if (!data.numeroEndereco) {
            validatedObj.isValid = false;
            validatedObj.numeroEndereco.valid = false;
            validatedObj.numeroEndereco.error =  'O campo numero é obrigatório!';
        };

        //Neighbour section
        if (data.bairroEndereco.length < 6 || data.bairroEndereco.length > 50) {
            validatedObj.isValid = false;
            validatedObj.bairroEndereco.valid = false;
            validatedObj.bairroEndereco.error =  'O campo bairro deve ter entre 6 e 50 caracteres';
        };
        if (!data.bairroEndereco) {
            validatedObj.isValid = false;
            validatedObj.bairroEndereco.valid = false;
            validatedObj.bairroEndereco.error =  'O campo bairro é obrigatório';
        };

        //Zone section
        if(data.zonaEndereco.length < 3 || data.zonaEndereco.length > 50){
            validatedObj.isValid = false;
            validatedObj.zonaEndereco.valid = false;
            validatedObj.zonaEndereco.error =  'O campo zona deve ter entre 3 e 50 caracteres';
        };
        if (!data.zonaEndereco) {
            validatedObj.isValid = false;
            validatedObj.zonaEndereco.valid = false;
            validatedObj.zonaEndereco.error =  'O campo zona é um campo obrigatório';
        };

        //City section
        if (data.cidadeEndereco.length < 3 || data.cidadeEndereco.length > 100) {
            validatedObj.isValid = false;
            validatedObj.cidadeEndereco.valid = false;
            validatedObj.cidadeEndereco.error =  'O campo cidade deve ter entre 3 e 100 caracteres';
        }; 
        if (!data.cidadeEndereco) {
            validatedObj.isValid = false;
            validatedObj.cidadeEndereco.valid = false;
            validatedObj.cidadeEndereco.error =  'O campo cidade é obrigatório';
        };

        //State section
        if(data.estadoEndereco.length < 2 || data.estadoEndereco.length > 50){
            validatedObj.isValid = false;
            validatedObj.estadoEndereco.valid = false;
            validatedObj.estadoEndereco.error =  'O campo estado deve ter entre 2 e 50 caracteres';
        };
        if (!data.estadoEndereco) {
            validatedObj.isValid = false;
            validatedObj.estadoEndereco.valid = false;
            validatedObj.estadoEndereco.error =  'O campo estado é obrigatório';
        };
        return validatedObj;
    }

};

export default enderecoValidation;