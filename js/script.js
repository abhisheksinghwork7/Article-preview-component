
const shareButton = document.body.querySelector(".share-img");
let clicked = true;

shareButton.addEventListener("click", (event) => {
    if (document.documentElement.clientWidth < 992) {
        if (clicked === false) {
            document.getElementById('share-details').className = 'share-details';
            document.getElementById('share-backgrnd').className = 'share-img';
            document.getElementById("share-btn").src = 'images/icon-share.svg';
            clicked = true;
        } else {
            document.getElementById('share-details').className = 'share-details open';
            document.getElementById('share-backgrnd').className = 'share-img open-share-btn';
            document.getElementById("share-btn").src = 'images/icon-share-white.png';
            clicked = false;
        }
    } else {
        if (clicked === false) {
            document.getElementById('share-details').className = 'share-details';
            clicked = true;
        } else {
            document.getElementById('share-details').className = 'share-details open';
            clicked = false;
        }
    }
})