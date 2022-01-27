const button = document.getElementById('search')
const text= document.getElementById('text')
const input = document.querySelector('.search-box')
const pvalue = document.getElementById('search-value')

button.addEventListener('click', () => {
    input.classList.add('active')
})

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        pvalue.innerHTML = "Test your search bar: " + text.value
        text.value = ''
        input.classList.remove('active')
    }
});