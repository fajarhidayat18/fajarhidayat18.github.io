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
