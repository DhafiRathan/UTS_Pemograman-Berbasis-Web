function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Harap isi semua form terlebih dahulu!");
        return false; // Mencegah formulir dikirim
    }
    alert("Pesan Anda berhasil dikirim!");
    return true; // Formulir bisa dikirim
}
