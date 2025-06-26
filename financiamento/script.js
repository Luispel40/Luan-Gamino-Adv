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

const faq = document.querySelectorAll('.dl dt');
faq.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
});