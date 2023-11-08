// CÓDIGO PARA OS DOIS MODAIS

function openModal(chave) {
  let modal = document.getElementById(chave);

  if (typeof modal == 'undefined' || modal === null)
    return;
  modal.style.display = 'block';

}

function closeModal(chave) {
  let modal = document.getElementById(chave);

  if (typeof modal == 'undefined' || modal === null)
    return;
  modal.style.display = 'none';

}


// testando




