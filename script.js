const number = document.querySelector("[data-input]");
const btn = document.querySelector("[data-btn]");

const sumNumbers = document.querySelector("[data-sum]");
const numbers = document.querySelector("[data-numbers]");

function verifyNumber(number) {
  let sum = 0;
  const lessThan = [];

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      console.log(i);
      lessThan.push(i);
    }
  }
  sumNumbers.innerText = `A soma dos números divisíveis por 3 e 5 de ${number} é: ${sum}`;
  numbers.innerText = `O números divisíveis por 3 e 5 são: ${lessThan.toString()}.`;
}

btn.addEventListener("click", () => {
  const isNumber = number.value > 0;

  if (!isNumber) {
    alert(
      `Desculpa, número inserido ${number.value} não é válido, tente novamente!`
    );
    number.value = "";
    number.focus();
    return;
  }

  verifyNumber(number.value);
});
