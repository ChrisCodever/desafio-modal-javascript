function executar() {
  var noticia = document.querySelector(".js-input-notic").value;
  var url = document.querySelector(".js-input-url").value;

  // Criar elementos
  let novo_elemento = document.createElement("h2");
  novo_elemento.className = "novodom";
  novo_elemento.innerText = noticia;

  let nova_imagem = document.createElement("img");
  nova_imagem.className = "novodomurl";
  nova_imagem.src = url;
  nova_imagem.alt = "Imagem da Notícia";

  // Adicionar elementos ao DOM
  let elemento = document.querySelector(".adicnotich2");
  elemento.innerHTML = ""; // Limpar qualquer conteúdo anterior
  elemento.appendChild(novo_elemento);

  let elemento2 = document.querySelector(".purl");
  elemento2.innerHTML = ""; // Limpar qualquer conteúdo anterior
  elemento2.appendChild(nova_imagem);
}