const textareaEl = document.getElementById("textarea");
const totalcounterEl = document.getElementById("total-counter");
const remainingEl = document.getElementById("remaining-counter");
textareaEl.addEventListener("keyup", () => {
  updatecounter();
});

function updatecounter() {
  totalcounterEl.innerText = textareaEl.value.length;
  remainingEl.innerText =
    textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
