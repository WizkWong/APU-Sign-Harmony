document.getElementById('input-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const alphabet = document.getElementById('alphabet').value;
    document.getElementById('sign-langauge-img').textContent = alphabet;
});