

function fbt(){
    let imagemslv = localStorage.getItem('imagemslv');
    let img = document.getElementById("catimg");
  //  const response = await fetch('https://cataas.com/cat');

    window.location.reload(true);
    
    
    
}

//window.onload = fbt;
const btn = document.getElementById("BT");
btn.addEventListener("click", fbt());