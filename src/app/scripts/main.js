var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var PREV_BUTTON = '[data-button-role="previous"]';
var NEXT_BUTTON = '[data-button-role="next"]';
var ESC_KEY = 27;
let currentImageIndex = 0;

function setDetails(imageUrl, titleText) {
  // 'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  // 'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb, index) {
  thumb.addEventListener('click', function (event) {
    currentImageIndex = index;
    event.preventDefault();
    showDetails();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray() {
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  document.body.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function showDetails() {
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function () {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addButtonClickHandlers() {
  document.querySelector(PREV_BUTTON).addEventListener('click', function () {
    const imageList = getThumbnailsArray();
    if (currentImageIndex === 0) currentImageIndex = imageList.length - 1;
    else currentImageIndex--;
    setDetailsFromThumb(imageList[currentImageIndex]);
  });

  document.querySelector(NEXT_BUTTON).addEventListener('click', function () {
    const imageList = getThumbnailsArray();
    if (currentImageIndex === imageList.length - 1) currentImageIndex = 0;
    else currentImageIndex++;
    setDetailsFromThumb(imageList[currentImageIndex]);
  });
}

export function initializeEvents() {
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
  addButtonClickHandlers();
}
