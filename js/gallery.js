window.addEventListener('load',function(){

var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [];
var images = document.getElementsByClassName("gallery-img");

for (var i = 0; i < images.length; i++) {
    var img = {
        src: images[i].getAttribute("src"),
        w: 1920,
        h: 1080
    }
    items.push(img)
    images[i].onclick = function() {
        openPhotoSwipe(Array.from(images).indexOf(this));
    }

    
}

var openPhotoSwipe = function(start) {
    var options = {
        // optionName: 'option value'
        // for example:
        index: start // start at first slide
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init()
}

openPhotoSwipe(0);




});