let ele = document.createElement("div");
buttonele = document.querySelector(".Button");
    document.body.querySelector(".box").appendChild(ele);
    document.querySelector(".wrapper");

function showresult (){
    let gas = Number(prompt("current cost of a gallon of gasoline"));
    let miles = Number(prompt("current cost of a gallon of gasoline"));
    let mpg1 = Number(12);
    let mpg2 = Number(17);
    let mpg3 = Number(26);
    let mpg4 = Number(29);

     document.getElementById("1").innerHTML = sum(mpg1, miles, gas);
     document.getElementById("2").innerHTML = sum(mpg2, miles, gas);
     document.getElementById("3").innerHTML = sum(mpg3, miles, gas);
     document.getElementById("4").innerHTML = sum(mpg4, miles, gas);

}

function sum (mpg, Driven, cost ){
    let text = "To drive a car with a MPG rating of" + mpg + "for " + Driven + " miles at $" + cost + " per gallon it would cost $";
    let sum2 = (Driven * cost) / mpg;
    let total =(sum2 * 100)/100;
    return text + total + ".";
}
showresult();
buttonele.addEventListener("click", function (){
    showresult();
});