import moment from 'moment'

const experienciaValidation = {

        async validate(data){
            let validatedObj = {
                isValid: true,
                empresaExperienciaProfissional: {
                    value: data.empresaExperienciaProfissional,
                    valid: true,
                    error: ''
                },
                descricaoExperienciaProfissional: {
                    value: data.descricaoExperienciaProfissional,
                    valid: true,
                    error: ''
                },
                isEmpregoAtualExperienciaProfissional: {
                    value: data.isEmpregoAtualExperienciaProfissional === false ? 0 : 1,
                    valid: true,
                    error: ''
                },
                dataInicioExperienciaProfissional: {
                    value: moment().unix(),
                    valid: true,
                    error: ''
                },
                dataFinalExperienciaProfissional: {
                    value: data.isEmpregoAtualExperienciaProfissional === false ? moment.unix() : null,
                    valid: true,
                    error: ''
                }
            };

            //empresa
            if(data.empresaExperienciaProfissional.length > 150){
                validatedObj.isValid = false;
                validatedObj.empresaExperienciaProfissional.valid = false;
                validatedObj.empresaExperienciaProfissional.error = 'O campo nome da empresa de ter no maximo 150 caracteres';
            }

            if(!data.empresaExperienciaProfissional){
                validatedObj.isValid = false;
                validatedObj.empresaExperienciaProfissional.valid = false;
                validatedObj.empresaExperienciaProfissional.error = 'O campo nome da empresa é obrigatório';
            }
            
            //descrição
            if (data.descricaoExperienciaProfissional > 250) {
                validatedObj.isValid = false;
                validatedObj.descricaoExperienciaProfissional.valid = false;
                validatedObj.descricaoExperienciaProfissional.error = 'O campo descrição deve ter no máximo 250 caracteres';
            }

            return validatedObj
        },

       
}

export default experienciaValidation;