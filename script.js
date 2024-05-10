const nextButton = document.querySelector(".next-button")
const prevButton = document.querySelector(".prev-button")
const aboutCards = document.querySelectorAll(".about-card")

let aboutCardCarousel = 0

function aboutCardsImagehandler () {
    aboutCards.forEach((aboutCard, index) => {
        if (aboutCardCarousel === index){
            aboutCard.classList.remove("hide")
        } else{
            aboutCard.classList.add("hide")
        }
    })
}

nextButton.addEventListener("click", function(){
    if(aboutCardCarousel === aboutCards.length -1){
        aboutCardCarousel = 0
    } else{
        aboutCardCarousel = (aboutCardCarousel +1)
    }
    aboutCardsImagehandler()
})

prevButton.addEventListener("click", function(){
    if(aboutCardCarousel === 0){
        aboutCardCarousel = aboutCards.length - 1;
    } else{
        aboutCardCarousel = (aboutCardCarousel - 1);
    }
    aboutCardsImagehandler();
});

const validateNameInput = document.querySelector(".validate-name")
const validateEmailInput = document.querySelector(".validate-email")

document.getElementById("form").addEventListener("submit", function(event){
    const emailInput = document.getElementById("email").value
    const nameInput = document.getElementById("name").value
    if(!emailInput || !nameInput){
        validateNameInput.style.display = "block"
        validateEmailInput.style.display = "block"
        event.preventDefault();
    }
})
