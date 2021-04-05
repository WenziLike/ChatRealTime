const searchBarUser = document.querySelector('.search input'),
    searchIcon = document.querySelector('.search button'),
    usersList = document.querySelector('.users-list')
//=================================================================
searchIcon.onclick = () => {
    searchBarUser.classList.toggle("show");
    searchIcon.classList.toggle("active");
    searchBarUser.focus();
    if (searchBarUser.classList.contains("active")) {
        searchBarUser.value = "";
        searchBarUser.classList.remove("active");
    }
}
//=================================================================
searchBarUser.onkeyup = () => {
    let searchTerm = searchBarUser.value
    if (searchTerm !== "") {
        searchBarUser.classList.add('active')
    } else {
        searchBarUser.classList.remove('active')
    }
    // Let's start Ajax
    let xhr = new XMLHttpRequest() // creating XML object
    xhr.open("POST", 'php/search.php', true)
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response
                usersList.innerHTML = data
            }
        }
    }
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhr.send('searchTerm=' + searchTerm)
}
//=================================================================
setInterval(() => {
    // Let's start Ajax
    let xhr = new XMLHttpRequest() // creating XML object
    xhr.open("GET", 'php/users.php', true)
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response
                if (!searchBarUser.classList.contains('active')) { // if active not contains in search bar then add this data
                    usersList.innerHTML = data
                }
            }
        }
    }
    xhr.send()
}, 500) // this function will run frequently after 500ms
