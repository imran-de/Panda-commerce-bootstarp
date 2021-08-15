// change all h2 tags text color
const titles = document.getElementsByTagName('h2');
for (title of titles) {
    title.style.color = 'lightblue';
};
// change backpack background color
const backPack = document.getElementById('backpack');
backPack.style.backgroundColor = 'tomato';

// change card all clasess border radious 30px
const cards = document.getElementsByClassName('card');
for (card of cards) {
    card.style.backgroundColor = '#FFF111';
    // card.style.borderRadius = '30px';
    card.style.cssText = 'border-radius: 30px!important';
}

// create a function and add a button than console log text
function clickhandle() {
    console.log('accept the button click');
}

// buy now button jeta te click kora hobe oita display none hoy jabe
const buyBtn = document.getElementsByTagName('button');
for (btn of buyBtn) {
    // console.log(btn.innerText);
    if (btn.innerText == 'Buy Now') {
        // console.log(btn);
        btn.addEventListener('click', function (event) {
            event.target.style.display = 'none';
        })
    }
}

// submit button disable by default when type email it's make active
document.getElementById('email-confirm').addEventListener('keyup', function (event) {
    const sendBtn = document.getElementById('send');
    const val = event.target.value;
    const regex = /(^.*\@gmail.com$)/;
    // console.log(regex.test(val));
    if (regex.test(val)) {
        // console.log('I am confirmed email!!');
        sendBtn.removeAttribute('disabled');
        sendBtn.style.opacity = '1';
    } else {
        // console.log('Who are you!!!');
        sendBtn.style.opacity = '.5';
        sendBtn.setAttribute('disabled', true);
    }
})

/* Optional work */
// doubl click function run for background color change
function bgChangeDoubletounch() {
    document.getElementById('bgchange').style.backgroundColor = '#f0f8ff';
}
// mouse enter korle image change
document.getElementById('reebok').addEventListener('mouseenter', function (event) {
    event.target.src = '../images/bags/bag-1.png';
});
// mouse out again change image
document.getElementById('reebok').addEventListener('mouseout', function (event) {
    event.target.src = '../images/shoes/shoe-1.png';
});
