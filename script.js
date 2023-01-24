window.onload=()=>{
    let buttonClick = document.getElementById("button");
    console.log(buttonClick);
    let checkboxClick= document.getElementById("checkeado");
    console.log(checkboxClick);
    buttonClick.addEventListener("click", ()=>{
        EnsenaLista()
    });
    checkboxClick.addEventListener("change", (evento)=>{
        console.log(evento);
        if(checkboxClick.checked){
            buttonClick.disabled=false;
        };
        console.log(buttonClick.disabled);
    });
};

function EnsenaLista(){
    let result = document.getElementById("resultado");
    //console.log(result);
    let numroMin = parseInt(document.getElementById("caja1").value);
    let numroMax = parseInt( document.getElementById("caja2").value);
    //console.log(numroMin, numroMax);
    result.innerHTML="";
    result.innerHTML +=`<p>Todos los números</p>`;
    for (let index = numroMin; index <= numroMax; index++) { //todos los números
        //console.log(index);
        result.innerHTML +=`<p>${index}</p>`;
    };
    result.innerHTML +=`<p>Solo los números impares</p>`;
    for (let index = numroMin; index <= numroMax; index++) { //solo los números impares
        //console.log(index);
        (index%2)?(
            result.innerHTML +=`<p>${index}</p>`):(null);
    };
    result.innerHTML +=`<p>Cada 3 números</p>`;
    for (let index = numroMin; index <= numroMax; index = index+3) { //todos los números
        //console.log(index);
        result.innerHTML +=`<p>${index}</p>`;
    };
};
