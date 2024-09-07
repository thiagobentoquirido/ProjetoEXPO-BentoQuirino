
const baseUrl = "https://cataas";


async function getData() {
    let response = await fetch(`https://cataas.com/cat`);
    response = await response.blob();
    console.log(response);
    return URL.createObjectURL(response);
    
    
}
async function plotData() {
  const quots = await getData();
  let div = document.getElementById('catimg')
  div.innerHTML = `<img src="${quots}" />`;
  window.location.reload(true);
  
}

/*
function fbt(){
    let imagemslv = localStorage.getItem('imagemslv');
    let img = document.getElementById("catimg");
  //  const response = await fetch('https://cataas.com/cat');

    
    
    
    
}

//
const btn = document.getElementById("BT");
btn.addEventListener("click", fbt());*/