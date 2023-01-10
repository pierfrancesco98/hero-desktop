const next = document.querySelector('.next');
const container = document.querySelector('.container');
const image = document.querySelector('.image');
const text = document.querySelector('.text');


const imageArray = [
    {
        url: "uno.png",
        text: "Energy drink one",
        color: "#778BEB"
    },
    {
        url: "due.png",
        text: "Energy drink two",
        color: "#8FB9A8"
    },
    {
        url: "tre.png",
        text: "Energy drink three",
        color: "#EB8686"
    }
];

console.log(imageArray)
let index = 0;
next.addEventListener('click', () => {
index++;
if (index >= imageArray.length) {
    index = 0;
}
container.style.background = imageArray[index].color;
image.classList.add( 'animate__bounceInLeft');
text.classList.add( 'animate__bounceInLeft');
image.src = imageArray[index].url;
text.innerHTML = imageArray[index].text;
image.addEventListener('animationend', () => {
    image.classList.remove('animate__bounceInLeft');
    text.classList.remove('animate__bounceInLeft');
  });
 
console.log(index)
});