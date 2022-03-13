const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

for (let i = 1; i < 6; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/pic${i}.jpg`);
  thumbBar.appendChild(newImage);
}

function displayImage(value) {
  displayedImage.setAttribute("src", `${value}`);
}

thumbBar.addEventListener("click", function (event) {
  clearWayfinding();
  if (event.target && event.target.nodeName === "IMG") {
    let imgSrc = event.target.getAttribute("src");
    displayImage(imgSrc);
    event.target.style.outline = "5px solid red";
    event.target.style.position = "relative";
    event.target.style.zIndex = "10";
  }
});

var thumbImgs = document.querySelectorAll(".thumb-bar img");

function clearWayfinding() {
  for (let i = 0; i < thumbImgs.length; i++) {
    thumbImgs[i].style.outlineWidth = "0";
    thumbImgs[i].style.zIndex = "0";
  }
}

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery and https://davidwalsh.name/event-delegate
