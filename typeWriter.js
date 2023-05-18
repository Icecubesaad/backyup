// Array of values
const values = ["Experienced MERN Stack Developer",
"Proficient in JavaScript, React, Node.js, and Express.js",
"Experience with backend development and RESTful APIs",
  "Skilled in working with databases like MongoDB",];
let currentIndex = 0;

// Function to fade in and out
function fadeAnimation() {
  const textElement = document.getElementById("text");
  const currentValue = values[currentIndex];

  // Fade In
  textElement.textContent = currentValue;
  textElement.style.opacity = 1;

  // Delay before fading out
  setTimeout(() => {
    // Fade Out
    textElement.style.opacity = 0;

    // Delay before fading in with new value
    setTimeout(() => {
      currentIndex++; // Move to the next element

      if (currentIndex === values.length) {
        // Check if reached the end of the array
        currentIndex = 0; // Start over
      }

      fadeAnimation(); // Recursively call the function for the next element
    }, 1000); // Wait for 1 second before fading in with new value
  }, 3000); // Display each value for 3 seconds
}

// Start the fade animation
fadeAnimation();
