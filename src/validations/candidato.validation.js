import moment from 'moment';

const candidatoValidation = {

        validate(data){
            let validatedObj = {
                isValid: true,
                nomeCandidato: {
                    value: data.nomeCandidato,
                    valid: true,
                    error: ''
                },
                cpfCandidato: {
                    value: data.cpfCandidato,
                    valid: true,
                    error: ''
                },
                dataNascimentoCandidato: {
                    value: data.dataNascimentoCandidato.timestamp,
                    valid: true,
                    error: ''
                }
            };

            //Name section
            if (data.nomeCandidato.length < 3 || data.nomeCandidato.length > 150) {
                validatedObj.isValid = false;
                validatedObj.nomeCandidato.valid = false;
                validatedObj.nomeCandidato.error = 'O campo nome deve ter entre 3 e 150 caracteres';
            };
            if (!data.nomeCandidato) {
                validatedObj.isValid = false;
                validatedObj.nomeCandidato.valid = false;
                validatedObj.nomeCandidato.error = 'O campo nome é obrigatório';
            };

            //CPF section
            if (!data.cpfCandidato) {
                validatedObj.isValid = false;
                validatedObj.cpfCandidato.valid = false;
                validatedObj.cpfCandidato.error = 'O campo CPF é obrigatório';
            };
            if(data.cpfCandidato.length != 11 ){
                validatedObj.isValid = false;
                validatedObj.cpfCandidato.valid = false;
                validatedObj.cpfCandidato.error = 'O campo CPF deve ter 11 caracteres';
            };

            //Birthday section
            if(!data.dataNascimentoCandidato){
                validatedObj.isValid = false;
                validatedObj.dataNascimentoCandidato.valid = false;
                validatedObj.dataNascimentoCandidato.error = 'O campo data de nascimento é obrigatório';
            };
            //Checking for underage
            let todayInMilli = moment().unix();
            let ageInMilli = todayInMilli - data.dataNascimentoCandidato.timestamp;
            let age = ageInMilli / (60 * 60 * 24 * 365)
            if(age < 16){
                validatedObj.isValid = false;
                validatedObj.dataNascimentoCandidato.valid = false;
                validatedObj.dataNascimentoCandidato.error = 'O usuario deve ter no minimo 16 anos';
            }
            return validatedObj;
        },

       
}

export default candidatoValidation;