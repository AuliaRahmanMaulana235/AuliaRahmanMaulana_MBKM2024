function validateForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Tolong isi form terlebih dahulu !');
        return false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Tolong masukan alamat email yang benar.');
        return false;
    }

    alert('Form anda berhasil terkirim!\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    document.getElementById('contactForm').reset();
}

document.getElementById('contactForm').addEventListener('submit', validateForm);
