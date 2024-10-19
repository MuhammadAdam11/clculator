function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('display').value;
        const result = eval(expression);
        if (expression === "1+1") {
            document.getElementById('display').value = "Love You"; // Menampilkan Love You
        } else {
            document.getElementById('display').value = result; // Menampilkan hasil biasa
        }
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
