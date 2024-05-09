console.log("Olá mundo!");

const botao = document.getElementById("botaoQueFala");

botao.addEventListener("click", () => alert("Fui clicado!!!"));
botao.addEventListener("click", () => {
  alert("Assédio.");
});

const divs = document.querySelectorAll("div");
divs.forEach((item, key) => {
  item.addEventListener("click", () => {
    alert("Cliquei na div " + key);
  });
});

const qualBotao = (evt) => {
  alert(`Você clicou em "${evt.currentTarget.textContent}"`);
}

const botoes = document.querySelectorAll("button");
botoes.forEach(botao => {
  botao.addEventListener("click", qualBotao);
});