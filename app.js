document.querySelector(".convert").addEventListener("click", function(){
   let weight =  document.querySelector(".pound").value;
    let conversionFactor =  Math.floor(0.45359237 * weight);
    if(weight ===""){
        alert("Please, enter a valid input")
        return;
    }{
        document.querySelector(".ans").innerHTML = conversionFactor + " KG";
    }
})
document.querySelector(".reset").addEventListener("click", function(){
    let weight =  document.querySelector(".pound").value = "";
    let conversionFactor =  Math.floor(0.45359237 * weight);
    document.querySelector(".ans").innerHTML = "";
})