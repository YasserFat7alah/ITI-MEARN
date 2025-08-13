document.addEventListener("DOMContentLoaded", function () {
        const postsData = Array.from(
          document.querySelectorAll("#posts .card")
        ).map((card) => card.parentElement.outerHTML);

        const postsPerPage = 8;
        let currentPage = 1;
        const postsContainer = document.querySelector("#posts .row");
        const paginationLinks = document.querySelectorAll(".pagination .page-link");

        function renderPage(page) {
          postsContainer.innerHTML = "";
          const start = (page - 1) * postsPerPage;
          const end = start + postsPerPage;
          postsContainer.innerHTML = postsData.slice(start, end).join("");
        }

        paginationLinks.forEach((link) => {
          link.addEventListener("click", function (e) {
            e.preventDefault();
            const text = this.textContent.trim();
            if (text === "«" && currentPage > 1) {
              currentPage--;
            } else if (
              text === "»" &&
              currentPage < Math.ceil(postsData.length / postsPerPage)
            ) {
              currentPage++;
            } else if (!isNaN(parseInt(text))) {
              currentPage = parseInt(text);
            }
            renderPage(currentPage);
            document.querySelector(".pagination .page-item.active").classList.remove("active");
            paginationLinks[currentPage].parentElement.classList.add("active");
          });
        });

  renderPage(currentPage);
  
  const sections = document.querySelectorAll("section");

  const navLinks = document.querySelectorAll("nav a");

  const observer = new IntersectionObserver((entries) => {
    console.log(entries)
    entries.forEach(entry => {
      
      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove("active"));
        console.log(entry.target.id)
        const activeLink = document.querySelector(`nav a[href="#${entry.target.id}"]`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: "-80px 0px 0px 0px"
   });

  sections.forEach(section => observer.observe(section));
});
      
 
