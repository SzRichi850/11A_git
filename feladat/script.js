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

//-- törlés funkció

let torlesGombok = document.getElementsByClassName("torles-btn");

for (let i = 0; i < torlesGombok.length; i++) {
    torlesGombok[i].onclick = function(esemeny) {
        let gomb = esemeny.target;
        let gombTarolo = gomb.parentElement;
        let listaElem = gombTarolo.parentElement;
        
        let szovegElem = listaElem.querySelector(".feladat-szoveg");

        let toroltLista = document.getElementById("torolt-lista");
        toroltLista.appendChild(szovegElem);

        listaElem.remove();
    }
}
//--feladat hozzáadása funkció

function letrehozElem(feladatSzoveg) {
    const li = document.createElement("li");
    li.className = "feladat-elem";

    const span = document.createElement("span");
    span.className = "feladat-szoveg";
    span.innerText = feladatSzoveg;

    const btnBox = document.createElement("div");
    btnBox.className = "gombok";

    const keszBtn = document.createElement("button");
    keszBtn.className = "kesz-btn";
    keszBtn.innerText = "Kész";

    const torlesBtn = document.createElement("button");
    torlesBtn.className = "torles-btn";
    torlesBtn.innerText = "Törlés";

    keszBtn.onclick = function () {
        span.style.textDecoration = "line-through";
        span.style.opacity = "50%";
        keszBtn.remove();
        document.getElementById("kesz-lista").appendChild(li);
    };

    torlesBtn.onclick = function () {
        document.getElementById("torolt-lista").appendChild(span);
        li.remove();
    };

    btnBox.appendChild(keszBtn);
    btnBox.appendChild(torlesBtn);
    li.appendChild(span);
    li.appendChild(btnBox);

    return li;
}

document.getElementById("hozzaadas-btn").onclick = function() {
    const inputMezo = document.getElementById("uj-feladat-input");
    const szoveg = inputMezo.value;

    if (szoveg !== "") {
        const ujElem = letrehozElem(szoveg);
        document.getElementById("aktiv-lista").appendChild(ujElem);
        inputMezo.value = "";
    }
};

//-- feladat mentés

document.getElementById("mentes-btn").onclick = function() {
    let aktivLista = document.getElementById("aktiv-lista");
    let aktivSpans = aktivLista.getElementsByClassName("feladat-szoveg");
    let aktivTomb = [];
    for (let i = 0; i < aktivSpans.length; i++) {
        aktivTomb.push(aktivSpans[i].innerText);
    }
    localStorage.setItem("aktivak", JSON.stringify(aktivTomb));

    let keszLista = document.getElementById("kesz-lista");
    let keszSpans = keszLista.getElementsByClassName("feladat-szoveg");
    let keszTomb = [];
    for (let i = 0; i < keszSpans.length; i++) {
        keszTomb.push(keszSpans[i].innerText);
    }
    localStorage.setItem("keszek", JSON.stringify(keszTomb));

    let toroltLista = document.getElementById("torolt-lista");
    let toroltSpans = toroltLista.getElementsByClassName("feladat-szoveg");
    let toroltTomb = [];
    for (let i = 0; i < toroltSpans.length; i++) {
        toroltTomb.push(toroltSpans[i].innerText);
    }
    localStorage.setItem("toroltek", JSON.stringify(toroltTomb));

    alert("Mentve!");
}

window.onload = function() {
    let mentettAktiv = JSON.parse(localStorage.getItem("aktivak"));
    if (mentettAktiv != null) {
        for (let i = 0; i < mentettAktiv.length; i++) {
            let ujElem = letrehozElem(mentettAktiv[i]);
            document.getElementById("aktiv-lista").appendChild(ujElem);
        }
    }

    let mentettKesz = JSON.parse(localStorage.getItem("keszek"));
    if (mentettKesz != null) {
        for (let i = 0; i < mentettKesz.length; i++) {
            let li = document.createElement("li");
            li.className = "feladat-elem";
            let span = document.createElement("span");
            span.className = "feladat-szoveg";
            span.innerText = mentettKesz[i];
            span.style.textDecoration = "line-through";
            span.style.opacity = "50%";
            li.appendChild(span);
            document.getElementById("kesz-lista").appendChild(li);
        }
    }

    let mentettTorolt = JSON.parse(localStorage.getItem("toroltek"));
    if (mentettTorolt != null) {
        for (let i = 0; i < mentettTorolt.length; i++) {
            let span = document.createElement("span");
            span.className = "feladat-szoveg";
            span.innerText = mentettTorolt[i];
            document.getElementById("torolt-lista").appendChild(span);
        }
    }
}
