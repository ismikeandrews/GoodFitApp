import { usuarioService } from '../services';

const usuarioValidation = {

        async validate(data){
            let validatedObj = {
                isValid: true,
                loginUsuario: {
                    value: data.loginUsuario,
                    valid: true,
                    error: ''
                },
                email: {
                    value: data.email,
                    valid: true,
                    error: ''
                },
                password: {
                    value: data.password,
                    valid: true,
                    error: ''
                }
            };

            //Username section
            if(data.loginUsuario.length < 6 || data.loginUsuario.length > 50) {
                validatedObj.isValid = false;
                validatedObj.loginUsuario.valid = false;
                validatedObj.loginUsuario.error = 'Login deve ter entre 6 e 50 caracteres!';
            };
            if(!data.loginUsuario) {
                validatedObj.isValid = false;
                validatedObj.loginUsuario.valid = false;
                validatedObj.loginUsuario.error = 'Login é um campo obrigatório!';
            };
            const loginRes = await usuarioService.getUsuarioByUsername(data.loginUsuario);
            if(loginRes.data){
                validatedObj.isValid = false;
                validatedObj.loginUsuario.valid = false;
                validatedObj.loginUsuario.error = 'O login já existe!';
            };

            //Email section
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(data.email.length > 150){
                validatedObj.isValid = false;
                validatedObj.email.valid = false;
                validatedObj.email.error = 'Email deve ter no máximo 150 caracteres!';
            };
            if(!emailRegex.test(String(data.email).toLowerCase())){
                validatedObj.isValid = false;
                validatedObj.email.valid = false;
                validatedObj.email.error = 'O email não é válido!';
            }
            if (!data.email) {
                validatedObj.isValid = false;
                validatedObj.email.valid = false;
                validatedObj.email.error = 'Email é um campo obrigatório!';
            };
            const emailRes = await usuarioService.getUsuarioByEmail(data.email);
            if(emailRes.data) {
                validatedObj.isValid = false;
                validatedObj.email.valid = false;
                validatedObj.email.error = 'O email já existe!';
            };

            //Password section
            if(data.password.length < 8){
                validatedObj.isValid = false;
                validatedObj.password.valid = false;
                validatedObj.password.error = 'A senha deve ter no minínmo 8 caracteres';
            };
            if (data.confirm != data.password) {
                validatedObj.isValid = false;
                validatedObj.password.valid = false;
                validatedObj.password.error = 'As senhas não conferem';
            };
            if (!data.password) {
                validatedObj.isValid = false;
                validatedObj.password.valid = false;
                validatedObj.password.error = 'Campo senha é obrigatorio';
            }
            if (!data.confirm) {
                validatedObj.isValid = false;
                validatedObj.password.valid = false;
                validatedObj.password.error = 'Campo confime a senha é obrigatorio';
            }

            return validatedObj
        },

       
}

export default usuarioValidation;