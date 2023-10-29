function enviar() {
  //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
  var nomeValue = document.querySelector(".js-input-url").value;
  var emailValue = document.querySelector(".js-input-notic").value;


  var formValue = {
    URL: nomeValue,
    DetalhesdaNoticia: emailValue,

  };
  console.log(formValue);
}