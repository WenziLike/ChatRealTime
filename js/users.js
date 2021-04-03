const searchBarUser = document.querySelector('.users .search input'),
    searchBtn = document.querySelector('.users .search button'),
    usersList = document.querySelector('.users .users-list')

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        searchBarUser.classList.toggle('active');
        searchBarUser.focus();
        searchBtn.classList.toggle('active');
        searchBarUser.value = ''
    })
}

searchBarUser.onkeyup = () => {
    let searchTerm = searchBarUser.value
    if (searchTerm != "") {
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
