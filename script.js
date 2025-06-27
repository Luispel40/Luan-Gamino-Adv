function enviarFormulario() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  alert("Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.");
  return false; // para impedir envio real
}

const faq = document.querySelectorAll('dt');
const faqResponse = document.querySelectorAll('dd');

faq.forEach((faq, index) => {
  faq.addEventListener('click', () => {
    document.querySelector('.open').classList.remove('open');
    faq.classList.toggle('open');
    faqResponse.forEach((response) => {
        response.classList.remove('openQuestion');
    })
    faqResponse[index].classList.toggle('openQuestion');
    faqResponse.forEach((response) => {
      if (response !== faqResponse[index]) {
        response.classList.remove('openQuestion');
      }
    })
  });
});
