let aboutBtn =document.getElementById("about-link");

aboutBtn.addEventListener("click", ()=>{
    const aboutSection =document.querySelector(".about-section")

    aboutSection.classList.add("transparent-highlight");

     setTimeout(() => {
    aboutSection.classList.add("about-highlight");
  }, 20);

    setTimeout(() => {
    aboutSection.classList.add("about-fade-out");
  }, 3000);

    setTimeout(()=>{
        aboutSection.classList.remove("transparent-highlight", "about-highlight", "about-fade-out")
    }, 3500)
})


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
});




