window.addEventListener("load", () => {
  let signup = document.getElementById("signup-msg");
  let close = document.getElementById("close");

  close.addEventListener("click", () => {
    signup.style.display = "none";
  });

  let navBtn = document.getElementById("navBtn");
  let navLinks = document.getElementById("navLinks");

  navBtn.addEventListener("click", () => {
    navLinks.classList.toggle("pop");
  });

  let showmore = document.querySelectorAll(".showmore");
  let stock = document.querySelectorAll(".items .wrapper");

  for (let i = 0; i < showmore.length; i++) {
    showmore[i].addEventListener("click", () => {
      if (showmore[i].innerText.trim() == "View All") {
        showmore[i].innerText = "View Less";
        stock[i].style.height = "fit-content";
      } else {
        showmore[i].innerText = "View All";
        stock[i].style.height = "400px";
      }
    });
  }
});
