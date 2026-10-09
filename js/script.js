/* Photo gallery: show the hovered photo in the big box */

function upDate(previewPic) {
    /* 1. check that the event is triggering */
    console.log("upDate triggered");
    /* 2. check the alt text and the source of the image */
    console.log("alt: " + previewPic.alt);
    console.log("src: " + previewPic.src);

    var bigBox = document.getElementById("image");
    /* 3. change the text of the div with id "image" */
    bigBox.innerHTML = previewPic.alt;
    /* 4. change the background image of the div with id "image" */
    bigBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("undo triggered");

    var bigBox = document.getElementById("image");
    /* put back the original background image and text */
    bigBox.style.backgroundImage = "url('')";
    bigBox.innerHTML = "Hover over an image below to display here.";
}
