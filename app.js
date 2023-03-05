let page = document.querySelector('.page')
let themeButton = document.querySelector('.theme__button')

themeButton.onclick = function () {
	page.classList.toggle('light-theme')
	page.classList.toggle('dark-theme')
}


// let searchBar = document.querySelector(".users .search input");
// searchBtn = document.querySelector(".users .search button");

// searchBtn.onclick = () =>
// {
// searchBar.classList.toggle("active");
// }