// toggle selengkapnya di about me
let text = document.querySelector('.truncate');
let link = document.querySelector('.link');

link.addEventListener('click', function () {
    text.classList.remove('truncate');
    link.remove(link);
    console.log(figure)
});

// skills
let btnLearn = document.querySelector('#learn');
let btnBasic = document.querySelector('#basic');
let x = document.querySelector(".learn");
let y = document.querySelector(".basic");

const basic = () => {
    y.classList.contains("d-none") ? y.classList.remove("d-none") & x.classList.add("d-none")  : '';
}
const learn = () => {
    x.classList.contains("d-none") ? x.classList.remove("d-none") & y.classList.add("d-none")  : '';
}

btnLearn.addEventListener('click', learn);
btnBasic.addEventListener('click', basic);

// toggle navigation
let btnHumberger = document.querySelector('.humberger');
let humberger = document.querySelector('.nav-container');
let linkPage = document.querySelectorAll('.link-page');
btnHumberger.addEventListener('click', function() {
     humberger.classList.toggle('off')
});
const linkTo = (n) =>{
    linkPage[n].addEventListener('click', function() {
        humberger.classList.toggle('off')
    })
}
linkTo(0)
linkTo(1)
linkTo(2)
linkTo(3)
linkTo(4)
let backToTop = document.querySelector('backtotop');
window.scrollTo((e)=>{
    console.log(e);
        backToTop.classList.add('on');
})
// document.addEventListener('scroll', function(){
// });
