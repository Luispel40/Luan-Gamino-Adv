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

// const testimonials = document.querySelector('#testimonials');
// const blockquotes = document.querySelectorAll('blockquote');

// //auto scroll testimonials and add new blockquote on end
// setInterval(() => {
//     const firstBlockquote = blockquotes[0];
//     firstBlockquote.style.animation = 'scrollLeft 5s linear infinite';
//   setTimeout(() => {
//       testimonials.removeChild(firstBlockquote);
//       testimonials.appendChild(firstBlockquote);
//   }, 300)
// }, 5000);