let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment(){
    
    count++;
    countEl.innerText = count;
    
}


function save(){
    console.log(count);
    let countStr = " " + count +" - ";
    saveEl.innerText += countStr
     count = 0;
    countEl.innerHTML = 0;
}