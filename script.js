const colorInput = document.getElementById("color-input");
const colorCode = document.getElementById("color-code");
const randomBtn = document.getElementById("random-btn");


const updateColorCode = (color) => {
    colorCode.textContent = color;
    document.body.style.backgroundColor = color;
};


colorInput.addEventListener("input", (e) => {
    updateColorCode(e.target.value);
});


const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    colorInput.value = randomColor;
    updateColorCode(randomColor);
}


randomBtn.addEventListener("click", generateRandomColor);



