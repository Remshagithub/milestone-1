// Function to get form data
function getFormData() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    return { name: name, email: email, phone: phone, experience: experience, skills: skills };
}
// Function to validate form data
function validateForm(data) {
    if (!data.name || !data.email || !data.phone || !data.experience || !data.skills) {
        alert('All fields are required!');
        return false;
    }
    // Simple email validation
    var emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address!');
        return false;
    }
    // Phone number validation (basic)
    if (isNaN(Number(data.phone)) || data.phone.length < 10) {
        alert('Please enter a valid phone number!');
        return false;
    }
    return true;
}
// Function to generate the resume
function generateResume() {
    var data = getFormData();
    if (!validateForm(data))
        return;
    // Generate Resume HTML
    var resumeHTML = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <h3>Experience</h3>\n        <p>").concat(data.experience.replace(/\n/g, '<br>'), "</p>\n        <h3>Skills</h3>\n        <p>").concat(data.skills.replace(/\n/g, '<br>'), "</p>\n    ");
    // Display the Resume Output
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}
// Attach the generateResume function to the button
document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.querySelector('button');
    generateButton.addEventListener('click', generateResume);
});
