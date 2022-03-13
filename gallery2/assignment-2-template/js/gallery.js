// Capture Elements
const selectedImg = document.querySelector("figure img");
const desc = document.querySelector("figcaption");
const listedImg = document.querySelectorAll("li img");
let largeImg = "large.jpg";

selectedImg.setAttribute("src", `images/flowers-pink-large.jpg`);
desc.textContent = `Pink Flowers`;

for (let i = 0; i < 5; i++) {
  switch (i) {
    case 0:
      listedImg[i].setAttribute("src", `images/flowers-pink-small.jpg`);
      break;
    case 1:
      listedImg[i].setAttribute("src", `images/flowers-purple-small.jpg`);
      break;
    case 2:
      listedImg[i].setAttribute("src", `images/flowers-red-small.jpg`);
      break;
    case 3:
      listedImg[i].setAttribute("src", `images/flowers-white-small.jpg`);
      break;
    case 4:
      listedImg[i].setAttribute("src", `images/flowers-yellow-small.jpg`);
      break;
  }

  listedImg[i].addEventListener("click", function (e) {
    let imgSrc = e.target.getAttribute("src");
    imgSrc = imgSrc.replace(imgSrc.slice(-9), largeImg);
    selectedImg.setAttribute("src", imgSrc);
    let color = e.target.getAttribute("src").substring(15, imgSrc.length - 10);
    desc.textContent = color + ` Flowers`;
  });
}
