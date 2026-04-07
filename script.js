/* =====================================================
   JAVASCRIPT FEATURES (Requirement C)
   ===================================================== */

// FEATURE 1: Prompt-based personalization
window.onload = function () {
  let visitorName = prompt("Welcome! What is your name?");
  if (visitorName === "" || visitorName === null) {
    visitorName = "Guest";
  }
  // DOM Manipulation: Update the hero text with the visitor's name
  const heroH1 = document.querySelector(".hero-text h1");
  heroH1.innerHTML = `Hi ${visitorName}, I'm <span>Rich Villaver</span>`;
};

// FEATURE 2: Basic validation with feedback
// Add "event" inside the parenthesis for proper validation
function validateForm(event) {
  event.preventDefault(); // CRITICAL: Stop the page refresh

  // Get your input elements
  let nameInput = document.getElementById("nameInput");
  let emailInput = document.getElementById("emailInput");
  let messageInput = document.getElementById("messageInput");
  let error = document.getElementById("error");

  // Get the values from the elements
  let name = nameInput.value;
  let email = emailInput.value;
  let message = messageInput.value;

  // Basic Validation
  if (name === "" || email === "" || message === "") {
    error.innerText = "Please complete all fields.";
    error.style.color = "#e63946"; // Red error color
    return false;
  }

  // =====================================================
  // THE NEW FIX: Clear the inputs on success!
  // =====================================================
  nameInput.value = ""; // Clear the name field
  emailInput.value = ""; // Clear the email field
  messageInput.value = ""; // Clear the message field
  // =====================================================

  // Display success feedback (Better than an alert!)
  error.innerText =
    "Thanks for reaching out, " + name + "! Your message was sent.";
  error.style.color = "#0d9488"; // Clean teal success color

  return true;
}
// FEATURE 3: Dynamic content update (Copyright Year)
document.addEventListener("DOMContentLoaded", function () {
  const footerPara = document.querySelector("footer p");
  const currentYear = new Date().getFullYear();
  footerPara.innerHTML = `&copy; ${currentYear} Rich Villaver. Built with passion.`;
});

/* =====================================================
   JQUERY INTERACTIONS (Requirement D)
   ===================================================== */
$(document).ready(function () {
  // interaction 1: Show/Hide Skills using fadeToggle
  $("#toggleSkills").click(function () {
    $("#skillList").fadeToggle();
  });

  // Interaction 2: Add element using .append() and .val()
  $("#addProject").click(function () {
    let project = $("#newProject").val();
    if (project !== "") {
      $("#projectList").append(`
                <div class="project-card">
                    <h3>${project}</h3>
                    <p>New project description coming soon.</p>
                </div>
            `);
      $("#newProject").val(""); // Clear the input field
    }
  });
});
