document.addEventListener("click", (event) => {
    const photoContainer = document.getElementById("photo-container");
    const img = document.createElement("img");
    img.src = "photo.jpg"; 
    img.className = "photo";
    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
    photoContainer.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 2000);
    clickCount++;
    updateCounter();
});
function updateCounter(){
    let counterElement = document.getElementById("counter");
    if (!counterElement){
        counterElement = document.createElement("div");
        counterElement.id = "counter";
        document.body.appendChild(counterElement);
    }
    counterElement.textContent = clickCount + " ноготочков";
}
