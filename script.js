function guessNumber() {
    var userNumber = Math.floor(Math.random() * 10);
    var computerNumber = Math.floor(Math.random() * 10);
    var competitorNumber = parseInt(document.getElementById("competitorNumber").value);
    var resultElement = document.getElementById("result");

    if (isNaN(competitorNumber)  ||competitorNumber < 0 || competitorNumber > 10) {
        resultElement.textContent = "Invalid competitor number. Please enter a number between 0 and 10.";
        return;
    }

    document.getElementById("userNumber").textContent = userNumber;
    document.getElementById("computerNumber").textContent = computerNumber;

    var userDifference = Math.abs(userNumber - computerNumber);
    var competitorDifference = Math.abs(competitorNumber - computerNumber);

    if (userDifference < competitorDifference) {
        resultElement.textContent = "Компьютер выиграл!";
    } else if (competitorDifference < userDifference) {
        resultElement.textContent = "Вы выиграли!";
    } else {
        resultElement.textContent = "Ничья!";
    }
}