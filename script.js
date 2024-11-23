// Select form and fields
const form = document.getElementById('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

// Validation patterns
const patterns = {
  name: /^[a-zA-Z]+( [a-zA-Z]+)?$/, // At least 3 characters, letters and spaces only
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[cC][oO][mM]$/, // Valid email format
  password: /^(?=.*[A-Z])(?=.*\d).{8,}$/, // Minimum 8 characters, 1 uppercase, 1 digit
};

// Validation function
function validateField(field, regex, errorMessage) {
  const value = field.value.trim();
  const errorElement = field.nextElementSibling;

  if (regex.test(value)) {
    field.classList.remove('error');
    field.classList.add('success');
    errorElement.textContent = '';
    errorElement.classList.remove('active');
  } else {
    field.classList.remove('success');
    field.classList.add('error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('active');
  }
}

// Real-time validation
nameField.addEventListener('input', () => validateField(nameField, patterns.name, 'Enter a valid name'));
emailField.addEventListener('input', () => validateField(emailField, patterns.email, 'Enter a valid email'));
passwordField.addEventListener('input', () => validateField(passwordField, patterns.password, 'Password must have 8 characters, 1 uppercase letter, and 1 number'));

// Form submission validation
form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateField(nameField, patterns.name, 'Enter a valid name');
  validateField(emailField, patterns.email, 'Enter a valid email');
  validateField(passwordField, patterns.password, 'Password must have 8 characters, 1 uppercase letter, and 1 number');

  const isFormValid = document.querySelectorAll('.form input.error').length === 0;

  if (isFormValid) {
    alert('Form submitted successfully!');
    form.reset();
    document.querySelectorAll('input').forEach(input => input.classList.remove('success'));
  }
});
