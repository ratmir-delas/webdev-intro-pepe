document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            alert(`O nome do anime é "${img.alt}"`);
        });
    });

    const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightgoldenrodyellow', 'lightpink', "white"];
    let currentColorIndex = 0;

    const changeBgButton = document.getElementById('change-bg-button');
    changeBgButton.addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    });
});