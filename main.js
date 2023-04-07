// let nav1 = document.getElementById("nav1");
// let open1 = document.getElementById("open1");
// let close = document.getElementById("close");
// open1.addEventListener("click", function() {
// nav1.style.opacity = '1'
// })
// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
  
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    scrollToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  // SCROLL TO TOP
  
  let magicCopy = document.getElementById("magicCopy");
  let magicIcon = document.getElementById("magicIcon");
  let magicImage = document.getElementById("magicImage");
  
  let popUpimg = document.getElementById("popUpimg");
  
  // MAGIC COPY
  magicCopy.addEventListener("click", function () {
    popUpimg.src = "/magic-copy2.jpg";
    magicCopy.classList.add("ACTIVEbackground");
    magicIcon.classList.remove("ACTIVEbackground");
    magicImage.classList.remove("ACTIVEbackground");
  });
  
  // MAGIC ICON
  magicIcon.addEventListener("click", function () {
    popUpimg.src = "/magic-icon.jpg";
    magicIcon.classList.add("ACTIVEbackground");
    magicCopy.classList.remove("ACTIVEbackground");
    magicImage.classList.remove("ACTIVEbackground");
  });
  // MAGIC IMAGE
  magicImage.addEventListener("click", function () {
    popUpimg.src = "/magic-image.jpg";
    magicImage.classList.add("ACTIVEbackground");
    magicIcon.classList.remove("ACTIVEbackground");
    magicCopy.classList.remove("ACTIVEbackground");
  });
  // ====================================
  // ====================================
  // TEXT ICON
  let textIcon = document.getElementById("textIcon");
  let copyRight = document.getElementById("copyRight");
  let textImage = document.getElementById("textImage");
  let BIGpOPUP = document.getElementById("BIGpOPUP");
  
  textIcon.addEventListener("click", function () {
    BIGpOPUP.src = "/magic-icon-min.gif";
    textIcon.classList.add("ACTIVEbackground11");
    copyRight.classList.remove("ACTIVEbackground11");
    textImage.classList.remove("ACTIVEbackground11");
  });
  // COPY RIGHT
  copyRight.addEventListener("click", function () {
    BIGpOPUP.src = "/magic-copy-min.gif";
    copyRight.classList.add("ACTIVEbackground11");
    textIcon.classList.remove("ACTIVEbackground11");
    textImage.classList.remove("ACTIVEbackground11");
  });
  //  TEXT IMAGE
  textImage.addEventListener("click", function () {
    BIGpOPUP.src = "/magic-image-min.gif";
    textImage.classList.add("ACTIVEbackground11");
    textIcon.classList.remove("ACTIVEbackground11");
    copyRight.classList.remove("ACTIVEbackground11");
  });
  // ======================================
  let monthly = document.getElementById("monthly");
  let yearly = document.getElementById("yearly");
  let spanText = document.getElementById("spanText");
  let strong = document.getElementById("strong");
  let sub = document.getElementById("sub");
  let pTEXT = document.getElementById("pTEXT");
  
  monthly.addEventListener("click", (e) => {
    e.preventDefault();
    monthly.classList.add("active");
    yearly.classList.remove("active");
    spanText.innerHTML = "$9";
    spanText.innerHTML = "$5";
    sub.innerHTML = "per month";
    pTEXT.innerHTML = "Save 44% for a limited time";
  });
  yearly.addEventListener("click", (e) => {
    e.preventDefault();
    yearly.classList.add("active");
    monthly.classList.remove("active");
    spanText.innerHTML = "";
    strong.innerHTML = "$49";
    sub.innerHTML = "per year";
    pTEXT.innerHTML = "Save $11/yr with yearly billing";
  });
  