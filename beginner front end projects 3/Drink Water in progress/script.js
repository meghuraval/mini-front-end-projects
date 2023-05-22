const smallcups = document.querySelectorAll(".cup-small");
const litres = document.getelementById("litres");
const percentage = document.getelementById("percentage");
const remained = document.getelementById("remained");

updatebigcup();

smallcups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightcups(idx));
});

function highlightcups(idx) {
  if (
    smallcups[idx].classList.contains("full") &&
    !smallcups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  smallcups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updatebigcup();
}

function updatebigcup() {
  const fullcups = document.querySelectorAll(".cup-small.full").length;
  const totalcups = smallcups.length;

  if (fullcups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullcups / totalcups) * 330}px`;
  }
}
