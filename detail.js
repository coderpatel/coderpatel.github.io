var currentUrl = document.URL;
var b = currentUrl.split('%20');
var c = b[0].split('@')[1];

var currentDish = c+" ";

for(let i=1;i<b.length;i++){
    if(i == b.length-1){
        currentDish+=b[i];
    }
    else{
        currentDish+=b[i]+" ";
    }   
}

//getting selected dish information and showing on web page
document.getElementById('name').innerHTML = '<p><h3>Dish Name:</h3></p><p>'+currentDish+'</p>';

var url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+currentDish;

fetch(url).then(res => {return res.json()}).then(
    data =>{
        if(data.meals != null){
            document.getElementById('img').innerHTML = '<p><h3>Dish Image</h3></p><img src = '+data.meals[0].strMealThumb+'>';
            document.getElementById('desc').innerHTML = '<p><h3>Cooking Instructions</h3></p><p>'+data.meals[0].strInstructions+'</p>'
        }
    }
); 
