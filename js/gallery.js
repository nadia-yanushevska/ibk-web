const images = [
  {
    fileName: "q1",
    alt: "Picture 1",
    width: 368,
    height: 276,
  },
  {
    fileName: "q2",
    alt: "Picture 2",
    width: 368,
    height: 276,
  },
  {
    fileName: "q3",
    alt: "Picture 3",
    width: 368,
    height: 488,
  },
  {
    fileName: "q4",
    alt: "Picture 4",
    width: 368,
    height: 488,
    imgClass: "tab-hide",
  },
  {
    fileName: "q5",
    alt: "Picture 5",
    width: 348,
    height: 618,
    imgClass: "narrow",
  },
  {
    fileName: "q6",
    alt: "Picture 6",
    width: 348,
    height: 618,
    imgClass: "narrow",
  },
  {
    fileName: "q7",
    alt: "Picture 7",
    width: 616,
    height: 462,
  },
  {
    fileName: "q8",
    alt: "Picture 8",
    width: 344,
    height: 611,
    imgClass: "grid-item-1 narrow",
  },
  {
    fileName: "q9",
    alt: "Picture 9",
    width: 344,
    height: 458,
    imgClass: "grid-item-2 narrow",
  },
  {
    fileName: "qa",
    alt: "Picture a",
    width: 344,
    height: 430,
    imgClass: "grid-item-3 tab-hide",
  },
  {
    fileName: "qb",
    alt: "Picture b",
    width: 248,
    height: 330,
    imgClass: "narrow",
  },
  {
    fileName: "qc",
    alt: "Picture c",
    width: 248,
    height: 330,
    imgClass: "narrow",
  },
  {
    fileName: "qd",
    alt: "Picture d",
    width: 506,
    height: 380,
  },
];
const startIndexes = [0, 4, 7, 10];

const containers = document.querySelectorAll("[data-img-container]");

function imageTemplate(image) {
  const { fileName: img, alt, width, height, imgClass = "" } = image;
  return `<picture
                    class="${imgClass}">
                  <source media="(min-width:1024px)" srcset="./img/${img}.webp" />
                  <source
                    media="(min-width:768px)"
                    srcset="./img/tablet/${img}.webp"
                  />
                  <img 
                    class="images"
                    src="./img/mobile/${img}.webp"
                    alt="${alt}"
                    width="${width}"
                    height="${height}"
                  />
                </picture>`;
}

function imagesTemplate(imgArray) {
  return imgArray.map(imageTemplate).join("\n\n");
}

function sliceImages(imgArray, idx) {
  const startIdx = startIndexes[idx];
  const endIdx = idx < startIndexes.length - 1 ? startIndexes[idx + 1] : null;

  return endIdx ? imgArray.slice(startIdx, endIdx) : imgArray.slice(startIdx);
}

function renderImages() {
  [...containers].forEach((container, idx) => {
    const imgArr = sliceImages(images, idx);
    container.innerHTML = imagesTemplate(imgArr);
    console.log(container);
  });
}

renderImages();
