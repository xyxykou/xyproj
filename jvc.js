document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const card = document.querySelector(".card");
    const heartsContainer = document.querySelector(".hearts");


    container.addEventListener("mouseenter", function () {
        card.style.transition = "top 0.6s ease-in-out";
        card.style.top = "-180px"; 
    });

    container.addEventListener("mouseleave", function () {
        card.style.transition = "top 0.6s ease-in-out";
        card.style.top = "5px"; 
    });
    
});
