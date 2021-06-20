const burgerLink = document.getElementsByClassName('hm_link');
const burgerCheckbox = document.getElementById('toggler');

function uncheckedBox() {
    burgerCheckbox.checked = false;
}


for (var i = 0 ; i < burgerLink.length; i++) {
    burgerLink[i].addEventListener('click', uncheckedBox, false);
 }


