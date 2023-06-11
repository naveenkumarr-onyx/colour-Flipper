const colorText = document.getElementById ("ctnColor");
const changeBg = document.getElementById("wrap");
const btn = document.getElementById("click--btn");
const  head = document.getElementById("Flipper")
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];


btn.addEventListener('click' ,() =>{
    let hexColour = "#";
    for (let i = 1; i <=6; i++) {
        hexColour += randomValue();
    }
    changeBg.style.backgroundColor = hexColour;
    colorText.innerHTML =hexColour
    head.style.color= hexColour;
})


function randomValue(){
    let randomIndex = Math.floor(Math.random()*16);
    return hex [randomIndex]
}