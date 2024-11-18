document.getElementById("getDogButton").addEventListener("click", async () => {
    const apiUrl = "https://dog.ceo/api/breeds/image/random"; // API для случайных изображений собак

    try {
        // Отправляем запрос
        const response = await fetch(apiUrl);

        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        // Обрабатываем JSON
        const data = await response.json();

        // Устанавливаем новое изображение
        const dogImage = document.getElementById("dogImage");
        dogImage.src = data.message;
        dogImage.alt = "Random Dog";
    } catch (error) {
        // Логируем ошибку и показываем сообщение
        console.error("Ошибка при получении изображения собаки:", error);
        alert("Sorry, something went wrong. Please try again.");
    }
});
