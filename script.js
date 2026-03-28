const text = ["Subita Kamal Reedee", "CSE Student", "Future Developer"];
let i = 0, j = 0, isDeleting = false;

function type() {
  let current = text[i];
  document.getElementById("typing").innerHTML = current.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".hidden").forEach(el => observer.observe(el));