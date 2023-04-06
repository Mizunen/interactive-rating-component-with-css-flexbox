let submitBtn = document.querySelector(".submit-button");
let ratingBtns = document.querySelectorAll(".rating-button");
let rating = "";
let ratingElement = document.querySelector("span");
let ratingCard = document.querySelector(".rating-card");
let thankYouCard = document.querySelector(".thank-you-card");

function changeRating(e){
    let button = e.target;
    rating = button.innerHTML;
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
