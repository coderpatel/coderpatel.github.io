//fetching details of favourite dishes
dishes = JSON.parse(localStorage.getItem('favourites'));
for(let i=0;i<dishes.length;i++){
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+dishes[i]).then(res=> res.json()).then(
        data =>{
            let image = data.meals[0].strMealThumb;
            //console.log(data.meals[0].strMealThumb);
            document.getElementById('cards').innerHTML += `<div class="card p-3"><img class="card-img-top" src="${image}" alt="Card image cap"><div class="card-body"><h5 class="card-title">${dishes[i]}</h5><button onclick="removeFromFavourites('${dishes[i]}')">Remove</button></div></div>`
            console.log(document.getElementById('cards').innerHTML);
        }
    )
}


//function used to remove from favourites
function removeFromFavourites(data){
    dishes = JSON.parse(localStorage.getItem('favourites'));
    index = dishes.indexOf(data);
    if(index>-1){
        dishes.splice(index,1);
        localStorage.setItem('favourites',JSON.stringify(dishes));
    }
}