$(document).ready(function(){

    //ativa a validacao no form cadastro.html
    $(function(){
      $("#form-cadastro").validate({
        //regras para validação 
        rules: {
            nome:{
                required: true
            },
            
            email:{
                required: true
            },

            senha: {
                required: true,
                minlenght:6
            },
            confirmarSenha: {
                required: true,
                minlenght:6,
                equalTo: "#inputPassword"  
            }
          },

          //mensagens de retorno
          messages:{
            nome:{
                required: "Informe um nome de usuário"
            },
            
            email:{
                required: "Informe seu Endereço de E-mail"
            },

            senha: {
                required: "informe uma senha valida",
                minlenght: "Minimo de 6 caracteres"
            },
            confirmarSenha: {
                required: "informe uma senha valida",
                minlenght: "Minimo de 6 caracteres",
                equalTo: "Senha deve ser igual a anterior"  
            }
          }
      });
      
    });
})