const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');

alert('This site is still being developed. You may encounter some bugs.')

one.addEventListener('click', () => {
    document.location.href = './Project1 - extending cards/index.html'
})

two.addEventListener('click', () => {
    document.location.href = './Project2 - fluid counting slider/index.html'
})

three.addEventListener('click', () => {
    document.location.href = './Project3 - hidden search bar/index.html'
})

four.addEventListener('click', () => {
    document.location.href = './Project4 - loading site with blur background/index.html'
})