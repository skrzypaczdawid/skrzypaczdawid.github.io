const button = document.getElementById('search') // Button with maginifying glass icon
const text= document.getElementById('text') // input form which would slide on clik
const input = document.querySelector('.search-box') // div which is holding input form inside
const pvalue = document.getElementById('search-value') // place where text would be written to
isActive = false


// Listener to activate or deactivate searchBar
button.addEventListener('click', function(){
    if(isActive)
    {
        deactivateSearch()
    }
    else{
        activateSearch()
    }
})

// Function to add funcionality: after pressing Enter key the word would be written on the page
 document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        pvalue.innerHTML = "This is what you searched: " + text.value
        text.value = ''
        input.classList.remove('active')
        isActive = false
    }
})

// Activation of searchBar
function activateSearch() {
    input.classList.add('active')
    isActive = true
}

// Dectivation of searchBar and also writting text from searchbar onto the page if text is not empty
function deactivateSearch(){
    if(text.value == '')
    {
        alert('Please enter something into search bar')
        return
    }
    pvalue.innerHTML = "This is what you searched: " + text.value
    text.value = ''
    input.classList.remove('active')
    isActive = false
}