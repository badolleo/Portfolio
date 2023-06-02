const viewMoreButton = document.getElementById("button1");
const elementAAfficher = document.getElementById("projet1_retex")
viewMoreButton.addEventListener("click", () => {
    
    elementAAfficher.classList.toggle("hidden");
    
});