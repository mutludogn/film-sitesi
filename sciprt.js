const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i)=>{
 let clicCounter = 0;
 const imageItem = movieLists[i].querySelectorAll("img").length;
 arrow.addEventListener("click",function(){
    if (imageItem - (4 + clicCounter)>=0 ){
        clicCounter++;
        movieLists[i].computedStyleMap.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
        }px)`;
    }else{
        movieLists[i].style.transform = "translateX(0)";
    }
 });
});

//dark mode

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".contanier, .navbar , .sidebar , .sideber i, .toggle, .movie-list-filter select, .toggle-ball");

ball.addEventListener("click",function(){
    items.forEach((item) => item.classList.toggle("active"));
})