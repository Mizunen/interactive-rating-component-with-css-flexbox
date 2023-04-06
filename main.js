let submitBtn = document.querySelector(".submit-button");
let ratingBtns = document.querySelectorAll(".rating-button");
let rating = "";
let ratingElement = document.querySelector("span");
let ratingCard = document.querySelector(".rating-card");
let thankYouCard = document.querySelector(".thank-you-card");

function changeRating(){
    let button = document.activeElement;
    console.log(button.innerHTML);
    rating = button.innerHTML;
    console.log(rating);
}

for(button of ratingBtns){
    button.addEventListener("click", changeRating)
}

function submit(){
    ratingElement.innerHTML = rating;
    ratingCard.classList.toggle("hide");
    thankYouCard.classList.toggle("hide");
}

submitBtn.addEventListener('click', submit);