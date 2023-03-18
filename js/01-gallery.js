import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const gallery = createImageCard(galleryItems);
galleryRef.innerHTML = gallery;

function createImageCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
       `;
    })
    .join("");
}

galleryRef.addEventListener("click", selectedCard);

function selectedCard(e) {
  e.preventDefault();
  const isGalleryImg = e.target.classList.contains("gallery__image"); 
  if (!isGalleryImg) { // || if (e.target.nodeName !== "IMG")
    return;
  }
  const src = e.target.dataset.source;

  const createModal = basicLightbox.create(
    `
  		<img width="400" height="200" src="${src}">
  	`
  );
  createModal.show();

  document.addEventListener("keydown", (e) => {
    console.log(e.code);
    if (e.code !== "Escape") {
      return;
    }
    createModal.close();
  });
}
