let gombok = document.getElementsByClassName("kesz-btn");

for (let i = 0; i < gombok.length; i++) {
    gombok[i].onclick = function(esemeny) {
        let gomb = esemeny.target;
        let gombTarolo = gomb.parentElement;
        let listaElem = gombTarolo.parentElement;
        let szoveg = listaElem.querySelector(".feladat-szoveg");

        szoveg.style.backgroundColor = "green";
        szoveg.style.color = "white";

        gomb.remove();

        let keszLista = document.getElementById("kesz-lista");
        keszLista.appendChild(listaElem);
    }
}