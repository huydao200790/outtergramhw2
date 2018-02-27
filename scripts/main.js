var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR ='[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR='[data-image-role="trigger"]';

function setDetails(imageUrl,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent=titleText;
}

function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
  'use strict';
  setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}

function addThumbClickerHandler(thumb){
  'use strict';
  thumb.addEventListener('click',function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
  });
}

function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  return thumbnailsArray;
}

function actionButton(){
  'use strict';
  var x = document.getElementById("mynext");
  x.addEventListener('click',function(event){
    event.preventDefault();
    setDetails("img/otter5.jpg","this is a test");
  });
}
/*
function setImage(myButton){
  thumbarray = getThumbnailsArray();
  i = 0;
  if(myButtom = "next")
}*/

function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickerHandler);
  //actionButton();

}
initializeEvents();
