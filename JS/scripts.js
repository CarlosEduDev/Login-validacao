const form = document.querySelector('#form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector("#email");
const passowordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job')
const messageTextarea = document.querySelector('#message')

// AVISOS
const nameForm = document.querySelector('#nameform')
const emailForm = document.querySelector('#emailform')
const passwordForm = document.querySelector('#passwordform')
const selectForm = document.querySelector('#selectform')
const messageForm = document.querySelector('#messageArea')

form.addEventListener('submit', (event) =>{
   event.preventDefault()

   // Verifica se o nome está vazio
   if(nameInput.value === ''){
     nameForm.textContent = 'Por favor, preencha o campo Nome'
      return; // return impede que a função continue
   }

   // Verifica se o e-mail está preenchido e, também se é válido
   if(emailInput.value === '' || isEmailValid(emailInput.value)){
      emailForm.textContent = 'Por favor, insira seu e-mail'
      return;
   }

   //Verifica se a senha está preenchida
   if(!validatePassword(passowordInput.value, 6)){
      passwordForm.textContent = "A senha deve conter no mínimo 6 caracteres"
      return;
   }

   //Verificar se a situação foi selecionada
   if(jobSelect.value === ''){
      selectForm.textContent = "Selecione uma opção"
      return;
   }

   // Verifica se a mensagem está preenchida
   if(messageTextarea.value === ''){
      messageForm.textContent = 'Por favor, preencha o campo acima!'
      return;
   }


   // Se todos os campos estiverem corretamente preenchidos, envie o form
   form.submit();
})

// Função que valida o e-mail
function isEmailValid(email){
   
   // Cria uma regex para validar email
   const emailRegex = new RegExp(
      //usuário12@host.com.br
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z][2,]$/
   );

   if(emailRegex.test(email)){
      return true
   }

   return false;
}

//Função que valida a senha
function validatePassword(password, minDigits){
   if(password.length >= minDigits){
      //Senha válida
      return true
   }
   //Senha inválida
   return false;
}