let curtain = document.querySelector(".curtain");

window.addEventListener("scroll", function () {
    let value = window.scrollY;
    // console.log(value);
    curtain.style.left = value + "px"; //70px
});