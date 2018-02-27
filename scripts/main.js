var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR ='[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR='[data-image-role="trigger"]';
var IMAGE_INT ='[image-int]';

// set detail image and title
function setDetails(imageUrl,titleText){
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent=titleText;
}
///////////////////////////////////////////////////////////////////////////

function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

///////////////////////////////////////////////////////////////////////////////
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

function actionButton(currentIndex){
  'use strict';
  //event for next;
  var next = document.getElementById("nextDetail");
  next.addEventListener('click',function(event){
    event.preventDefault();
    currentIndex = currentIndex%5;
    currentIndex = currentIndex+1;
    var thumb = document.querySelectorAll("[image-int=\""+ currentIndex +"\"");
    var thumbnail = [].slice.call(thumb);
    setDetailsFromThumb(thumbnail[0]);
  });

  //event for previous
  var previous = document.getElementById("prevDetail");
  previous.addEventListener('click',function(event){
    event.preventDefault();
    currentIndex = currentIndex-1;
    if(currentIndex == 0)
      currentIndex = 5;
    var thumb = document.querySelectorAll("[image-int=\""+ currentIndex +"\"");
    var thumbnail = [].slice.call(thumb);
    setDetailsFromThumb(thumbnail[0]);
  });
}

function setImage(){
  var thumbnails = document.querySelectorAll(DETAIL_IMAGE_SELECTOR);
  var thumbnailsArray = [].slice.call(thumbnails);
  var currentIndex = thumbnailsArray[0].getAttribute('image-int');

  actionButton(currentIndex);
}

function initializeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickerHandler);
  setImage();

}
initializeEvents();
