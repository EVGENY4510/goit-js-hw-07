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
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li> `;
    })
    .join("");
}
galleryRef.addEventListener("click", selectedCard);

function selectedCard(e) {
  e.preventDefault();
  const isGalleryImg = e.target.classList.contains("gallery__image");
  if (!isGalleryImg) {
    // || if (e.target.nodeName !== "IMG")
    return;
  }
  

  const lightbox = new SimpleLightbox(".gallery a", {
      navText: ["<=", "=>"],
     
  
      captionsData: "alt",
    captionPosition: "top",
    captionDelay: 250,
  });
}
