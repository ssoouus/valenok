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
});
