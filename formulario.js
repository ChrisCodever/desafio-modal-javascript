function enviar() {
  //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
  var url = document.querySelector(".js-input-url").value;
  var noticia = document.querySelector(".js-input-notic").value;


  var formValue = {
    URL: url,
    Noticia: noticia,
  };


  console.log(formValue);





}


function executar() {

  //criar elemento
  var url = document.querySelector(".js-input-url").value;
  var noticia = document.querySelector(".js-input-notic").value;
  let novo_elemento = document.createElement('p');
  novo_elemento.className = "novodom";
  novo_elemento.innerText = url + "  " + noticia;

  //adicionar elemento ao formexistente

  let elemento = document.querySelector('.caixa');
  elemento.appendChild(novo_elemento);

}