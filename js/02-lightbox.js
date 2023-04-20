import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", openModalHandler);

const imageList = galleryItems.map((galleryItem) => {
    const element = `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
       <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
    </a>
 </li>`;
    return element;
  });

  const string = imageList.join("");
ulEl.insertAdjacentHTML("beforeend", string);

function openModalHandler(event) {
    event.preventDefault();
    const lightBox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
 }); 
 lightBox.on('show.simplelightbox', function () {})
 
   
