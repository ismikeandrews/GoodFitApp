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
                codProfissao: {
                    value: data.codProfissao,
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
                    value: data.dataInicioExperienciaProfissional,
                    valid: true,
                    error: ''
                },
                dataFinalExperienciaProfissional: {
                    value: data.isEmpregoAtualExperienciaProfissional === false ? data.dataFinalExperienciaProfissional : '',
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

            //data
            //inicio
            if (!data.dataInicioExperienciaProfissional) {
                validatedObj.isValid = false;
                validatedObj.dataInicioExperienciaProfissional.valid = false;
                validatedObj.dataInicioExperienciaProfissional.error = 'O campo descrição é obriatório'; 
            }
            if (data.dataInicioExperienciaProfissional) {
                const parsedDate = moment(data.dataInicioExperienciaProfissional, 'DD/MM/YYYY').unix()
                validatedObj.dataInicioExperienciaProfissional.value = parsedDate
            }

            //finish
            if (data.dataFinalExperienciaProfissional) {
                const parsedDate = moment(data.dataFinalExperienciaProfissional, 'DD/MM/YYYY').unix()
                validatedObj.dataFinalExperienciaProfissional.value = parsedDate
            }

            //codProfissao
            if(!data.codProfissao){
                validatedObj.isValid = false;
                validatedObj.codProfissao.valid = false;
                validatedObj.codProfissao.error = 'Selecione uma profissão'
            }

            return validatedObj
        },

       
}

export default experienciaValidation;