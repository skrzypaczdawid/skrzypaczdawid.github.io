const button = document.getElementById('search')
const text= document.getElementById('text')
const input = document.querySelector('.search-box')

button.addEventListener('click', () => {
    input.classList.toggle('active')
})

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        alert(text.value);
        text.value = ''
    }
});