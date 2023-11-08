// function enviar() {
//   //Variaveis que recebem valor dos inputs e depois são atribuidas ao JSON
//   var url = document.querySelector(".js-input-url").value;
//   var noticia = document.querySelector(".js-input-notic").value;


//   var formValue = {
//     URL: url,
//     Noticia: noticia,
//   };


//   console.log(formValue);





// }









function executar() {

  //criar elemento

  var noticia = document.querySelector(".js-input-notic").value;
  var url = document.querySelector(".js-input-url").value;





  let novo_elemento = document.createElement('h2');
  novo_elemento.className = "novodom";
  novo_elemento.innerText = noticia;


  let novo_elemento2 = document.createElement('h2');
  novo_elemento2.className = "novodomurl";
  novo_elemento2.innerText = url;


  //adicionar elemento ao formexistente

  let elemento = document.querySelector('.adicnotich2');
  elemento.appendChild(novo_elemento);


  let elemento2 = document.querySelector('purl');
  elemento2.appendChild(novo_elemento2);

}


// function executar() {

//   //criar elemento
//   var url = document.querySelector(".js-input-url").value;

//   let novo_elemento2 = document.createElement('div');
//   novo_elemento2.className = "novodomurl";
//   novo_elemento2.innerText = url;

//   //adicionar elemento ao formexistente

//   let elemento2 = document.querySelector('news_url');
//   elemento2.appendChild(novo_elemento2);

// }