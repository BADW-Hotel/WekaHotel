function loadAccount() {
    fetch('../Admin/akun.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('akun-container').innerHTML = data;
        });
}
document.addEventListener('DOMContentLoaded', loadAccount);