let clickCount = 0; // Инициализируем счетчик

document.addEventListener("click", (event) => {
    const photoContainer = document.getElementById("photo-container");
    const img = document.createElement("img");
    img.src = "photo.jpg";
    img.className = "photo";
    img.style.position = "absolute";
    img.style.left = event.clientX + "px";
    img.style.top = event.clientY + "px";
    photoContainer.appendChild(img);

    // Удаляем изображение через 2 секунды
    setTimeout(() => {
        img.remove();
    }, 2000);

    // Увеличиваем счетчик и обновляем его текст
    clickCount= clickCount * 2;
    updateCounter();
});

// Функция для обновления счетчика
function updateCounter() {
    let counterElement = document.getElementById("counter");
    counterElement.textContent = clickCount + " ноготочков";
}
