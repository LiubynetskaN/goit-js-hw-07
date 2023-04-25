import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulEl = document.querySelector(".gallery");
ulEl.addEventListener("click", openModalHandler);

const imageList = galleryItems.map((galleryItem) => {
  const element = `<li class="gallery__item">
  <a class="gallery__link" href="${galleryItem.original}">
    <img
      class="gallery__image"
      src="${galleryItem.preview}"
      data-source="${galleryItem.original}"
      alt="${galleryItem.description}"
    />
  </a>
</li>`;
  return element;
});

const string = imageList.join("");
ulEl.insertAdjacentHTML("beforeend", string);

function openModalHandler(event) {
  event.preventDefault();
  const instance = basicLightbox.create(
    `<img width="1400" height="900" src="${event.target.dataset.source}">`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModalHandler);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModalHandler);
      },
    }
  );
  instance.show();

  function closeModalHandler(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}
document.removeEventListener("keydown", closeModalHandler)
  }
}
