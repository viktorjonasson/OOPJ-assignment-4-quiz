document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons
    const buttons = document.querySelectorAll('.button-section button');
    let question = "Question";
    let category = "Category"

    let buttonTexts = [
        "Button 1 Text",
        "Button 2 Text",
        "Button 3 Text",
        "Button 4 Text"
    ];

    // Function to lock all buttons
    function lockButtons() {
        buttons.forEach(function(button) {
            button.disabled = true; // Disable the button
        });
    }

    // Function to unlock all buttons after the server responds
    function unlockButtons() {
        buttons.forEach(function(button) {
            button.disabled = false; // Enable the button
        });
    }

    // Iterate over each button and add an event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            lockButtons();
            // Check the class of the button clicked
            if (button.classList.contains('correct-answer')) {
                button.style.backgroundColor = "limegreen"; //TO DO: make this a function
            } else if (button.classList.contains('wrong-answer')) {
                button.style.backgroundColor = "orangered"; //TO DO: make this a function
            }
            let data = String(button.textContent);
            sendToServer(data);
        });
    });

    function updateButtonTexts(newButtonTexts) {
        const buttons = document.querySelectorAll('.button-section button');
        buttons.forEach((button, index) => {
            if (newButtonTexts[index]) {
                button.textContent = newButtonTexts[index];
            }
        });
    }
});