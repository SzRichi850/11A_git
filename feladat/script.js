//-- kész funkció

let gombok = document.getElementsByClassName("kesz-btn");

for (let i = 0; i < gombok.length; i++) {
    gombok[i].onclick = function(esemeny) {
        let gomb = esemeny.target;
        let gombTarolo = gomb.parentElement;
        let listaElem = gombTarolo.parentElement;
        let szoveg = listaElem.querySelector(".feladat-szoveg");

        szoveg.style.backgroundColor = "transparent";
        szoveg.style.textDecoration = "line-through";
        szoveg.style.opacity = "50%";
        gomb.remove();

        let keszLista = document.getElementById("kesz-lista");
        keszLista.appendChild(listaElem);
    }
}


let tasks = [];

function teendoHozzaadasa() {
    const input = document.getElementById("uj-feladat-input");

    if (input.value.trim() === "") return;

    const task = {
        id: Date.now(),
        nev: input.value,
        kesz: false
    };

    tasks.push(task);

    const li = letrehozElem(task);
    document.getElementById("aktiv-lista").appendChild(li);

    input.value = "";
}


//-- hozzáadás funkció


let torlesGombok = document.getElementsByClassName("torles-btn");

for (let i = 0; i < torlesGombok.length; i++) {
    torlesGombok[i].onclick = function(esemeny) {
        let gomb = esemeny.target;
        let gombTarolo = gomb.parentElement;
        let listaElem = gombTarolo.parentElement;

        gombTarolo.remove();

        let toroltLista = document.getElementById("torolt-lista");
        toroltLista.appendChild(listaElem);
    }
}






function letrehozElem(task) {
    const li = document.createElement("li");
    li.className = "feladat-elem";

    const span = document.createElement("span");
    span.className = "feladat-szoveg";
    span.innerText = task.nev;

    const btnBox = document.createElement("div");
    btnBox.className = "gombok";

    const keszBtn = document.createElement("button");
    keszBtn.innerText = "Kész";

    const torlesBtn = document.createElement("button");
    torlesBtn.innerText = "Törlés";

    keszBtn.onclick = function () {
        span.style.textDecoration = "line-through";
        span.style.opacity = "50%";
        keszBtn.remove();
        document.getElementById("kesz-lista").appendChild(li);
    };

    torlesBtn.onclick = function () {
        btnBox.remove();
        document.getElementById("torolt-lista").appendChild(li);
    };

    btnBox.appendChild(keszBtn);
    btnBox.appendChild(torlesBtn);

    li.appendChild(span);
    li.appendChild(btnBox);

    return li;
}

document.getElementById("hozzaadas-btn")
    .addEventListener("click", teendoHozzaadasa);