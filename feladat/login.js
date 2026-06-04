document.getElementById("login-link").onclick = function(esemeny) {
    const beirtNev = document.getElementById("login-nev").value;
    const beirtJelszo = document.getElementById("login-jelszo").value;

    const mentettNev = localStorage.getItem("regisztraltNev");
    const mentettJelszo = localStorage.getItem("regisztraltJelszo");

    if (!mentettNev || !mentettJelszo) {
        alert("Még senki sem regisztrált ezen a gépen! Kérlek regisztrálj előbb.");
        esemeny.preventDefault();
        return;
    }

    if (beirtNev === mentettNev && beirtJelszo === mentettJelszo) {
        alert("Sikeres bejelentkezés!");
    } else {
        alert("Hibás felhasználónév vagy jelszó!");
        esemeny.preventDefault();
    }
};