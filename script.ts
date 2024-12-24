// Define the structure of form inputs
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    experience: string;
    skills: string;
}

// Function to get form data
function getFormData(): ResumeData {
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    return { name, email, phone, experience, skills };
}

// Function to validate form data
function validateForm(data: ResumeData): boolean {
    if (!data.name || !data.email || !data.phone || !data.experience || !data.skills) {
        alert('All fields are required!');
        return false;
    }

    // Simple email validation
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
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
function generateResume(): void {
    const data = getFormData();

    if (!validateForm(data)) return;

    // Generate Resume HTML
    const resumeHTML = `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Experience</h3>
        <p>${data.experience.replace(/\n/g, '<br>')}</p>
        <h3>Skills</h3>
        <p>${data.skills.replace(/\n/g, '<br>')}</p>
    `;

    // Display the Resume Output
    const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
    resumeOutput.innerHTML = resumeHTML;
    resumeOutput.style.display = 'block';
}

// Attach the generateResume function to the button
document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.querySelector('button') as HTMLButtonElement;
    generateButton.addEventListener('click', generateResume);
});