//fetching every dish and storing in an array, searching with the condition of first charachter
var mealArray = [];
for(let i=0;i<26;i++){
    var chr = String.fromCharCode(97 + i);
    var url = 'https://www.themealdb.com/api/json/v1/1/search.php?f='+chr;
    fetch(url).then(res => { return res.json()}).then(data => { 
        if(data.meals != null){
            for(let i=0;i<data.meals.length;i++){
                mealArray.push(data.meals[i].strMeal);
            }
        }
    });
}


const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const displayWrapper = document.querySelector('.result');

favourites=[];//favourites dish array


//taking input from keyboard
searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;
  //taking value from input field and fitering values to get matching dishes
  if (input.length) {
    results = mealArray.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  displayResults(results);
});


//function used for deisplaying mathced dishes
function displayResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('display');
  }

  //appending each and every list item that matches the above condition
  const content = results
    .map((item) => {
        //let x = toString(item);
      return `<li><a href="detail.html?name=@${item}" target ="_self" data-name="${item}">${item}</a><button name="${item}" onclick = "addToFavourites('${item}')">Add to Favourites</button></li>`;
    })
    .join('');
    //console.log(content);
  searchWrapper.classList.add('display');
  displayWrapper.innerHTML = `<ul>${content}</ul>`;
}


//function used to add in favourites
function addToFavourites(data){
    //console.log(data);
    if(favourites.indexOf(data) == -1){
        let favourites = JSON.parse(localStorage.getItem('favourites'));
        favourites.push(data);
        localStorage.setItem('favourites',JSON.stringify(favourites));
        console.log(JSON.parse(localStorage.getItem('favourites')));
    }
}