
document.addEventListener('DOMContentLoaded', () => {
    const words = ['manzana', 'banana', 'cereza', 'datil', 'uva'];
    const displayArea = document.getElementById('displayArea');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    let intervalId;
    let timeoutId;

    function getRandomWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        displayArea.textContent = words[randomIndex];
    }

    startButton.addEventListener('click', () => {
        // Evita iniciar múltiples intervalos si ya está en curso
        if (intervalId) return;

        intervalId = setInterval(getRandomWord, 5); // Cambia 500 a cualquier intervalo en milisegundos

        timeoutId = setTimeout(() => {
            clearInterval(intervalId);
            intervalId = null;
        }, 800); // 3000 milisegundos = 3 segundos
    });

    stopButton.addEventListener('click', () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        intervalId = null;
    });
});
