const searchBarUser = document.querySelector('.users .search input'),
    searchBtn = document.querySelector('.users .search button')


searchBtn.onclick =()=>{
    searchBarUser.classList.toggle('active');
    searchBarUser.focus();
    searchBtn.classList.toggle('active');
}

console.log("Two File")
