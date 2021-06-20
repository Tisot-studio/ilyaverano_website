setTimeout(() => {
  document.getElementById('preload-page').style.visibility = 'hidden';
}, 5500)


const overlays = document.querySelectorAll('.over-card');
const covers = document.querySelectorAll('.cover');


function offVisible (overlayEl) {
  return function (e) {
    overlayEl.style.display = "none";
  }
} 

function onVisible (overlayEl) {
  return function (e) {
    overlayEl.style.display = "flex";
  }
} 

// Card 1
covers[0].addEventListener('click', onVisible(overlays[0]));
overlays[0].addEventListener('click', offVisible(overlays[0]));

// Card 2
covers[1].addEventListener('click', onVisible(overlays[1]));
overlays[1].addEventListener('click', offVisible(overlays[1]));

// Card 3
covers[2].addEventListener('click', onVisible(overlays[2]));
overlays[2].addEventListener('click', offVisible(overlays[2]));








