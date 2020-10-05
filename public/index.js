function addImage(keyword, index) {
    const image = document.createElement('img');
    image.src = `https://source.unsplash.com/400x255?${keyword}&sig=${index}`;

    const gallery = document.querySelector(".gallery");
    gallery.appendChild(image);
}
function removeAllPhoto() {
    const galleryElement = document.querySelector(".gallery");
    galleryElement.innerHTML = '';
}

function searchPhoto(event) {
    const keyword = event.target.value;
    console.log(keyword)
    if (event.key === 'Enter' && keyword !== '') {
        removeAllPhoto();
        for (let i = 0; i < 9; i++) {
            addImage(keyword, i);
        }
    }
}
function handleupdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    //setProperty ตั่งค่าให้ตัวแปรนั้นๆ
}

function main() {
    const inputControls = document.querySelectorAll('.controls input');
    // console.log(inputControl);
    inputControls.forEach((input) => { input.addEventListener('change', handleupdate); });   //handleupdate ผูกค่า

    inputControls.forEach((input) => { input.addEventListener('mousemove', handleupdate); });

    const inputElement = document.querySelector('.search');
    inputElement.addEventListener('keydown', searchPhoto);

    // addImage(`${search}`, 1);
}

main();




// scroll bar----------------------------------//
var preogressbar = document.getElementById("preogressbar");
var percent = document.getElementById("percent");

var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    var progress = (window.pageYOffset / totalHeight) * 100;
    preogressbar.style.height = progress + "%";
    percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
}
// END scroll bar----------------------------------//