function loginValidation() {
    let nama = document.getElementById('userName').value;
    let pw = document.getElementById('password').value;

    const validUsn = 'ahmad2017';
    const validPw = 'integrity';

    if (nama === validUsn && pw === validPw) {
        alert('Login berhasil! Anda akan di arahkan ke halaman sukses.');
        window.location.href = "sukses.html"
    } else {
        alert("Login gagal! Periksa kembali Username dan Password Anda.");
    }
}

