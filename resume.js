const nav = document.querySelector("nav");
const links = nav.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href");
    document.querySelector("#" + id).scrollIntoView();
  });
});