const $AdviceNumber = document.querySelector(".mainCard__adviceNumber"),
  $AdviceText = document.querySelector(".mainCard__adviceText"),
  $AdviceButton = document.querySelector(".mainCard__advice__button");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      $AdviceNumber.innerHTML = `ADVICE #${data.slip.id}`;
      $AdviceText.innerHTML = `❝ ${data.slip.advice} ❞`;
    });
}

window.addEventListener("click", (e) => {
  if (e.target === $AdviceButton) {
    getAdvice();
  }
});

window.addEventListener("DOMContentLoaded", getAdvice());
