const $AdviceNumber = document.querySelector(".mainCard__adviceNumber"),
  $AdviceText = document.querySelector(".mainCard__adviceText"),
  $AdviceButton = document.querySelector(".mainCard__button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      $AdviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
      $AdviceText.innerHTML = data.slip.advice;
    });
}

/* getAdvice(); */

window.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target === $AdviceButton) {
    getAdvice();
  }
});

window.addEventListener("DOMContentLoaded", getAdvice());
