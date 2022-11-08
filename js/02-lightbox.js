import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imgContainer = document.querySelector(".gallery");
const imgMarkup = createImgMarkup(galleryItems);

imgContainer.insertAdjacentHTML("beforeend", imgMarkup);

imgContainer.addEventListener("click", onImgContainerClick);

function createImgMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    })
    .join("");
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionType: 250,
  /* options */
});
function onImgContainerClick(event) {
  event.preventDefault();
}

console.log(galleryItems);
