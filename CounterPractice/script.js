const blocks = document.querySelectorAll(".block");
const container = document.querySelector(".container");
const count = document.getElementById("count");

console.log(container.parentElement);

const updateSelectedCount = () => {
  const selectedSeatsCount = document.querySelectorAll(".selected").length;

  count.innerText = selectedSeatsCount;
};

container.addEventListener("click", (e) => {
  if (e.target.classList.contains("block")) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});

updateSelectedCount();
