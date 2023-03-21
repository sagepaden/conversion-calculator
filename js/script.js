//Biz Logic

function lbsToOz(num) {
  return num*16;
}
function lbsToGrams(num){
  return num*16*28.3495;
}
function lbsToLbs(num){
  return num;
}
function ozToLbs(num){
  return num/16;
}
function ozToGrams(num){
  return num*28.3495;
}
function ozToOz(num){
  return num;
}
function gramToLbs(num){
  return num / 16 / 28.3495;
}
function gramToOz(num){
  return num /16;
}
function gramToGram(num){
  return num;
}





function tsp(num) {
  return (num*4.929)
}

function tbsp(num) {
  return (num*14.787)
}

function cups(num) {
  return (num*240)
}



// user interface logic
let showReturn1 = function(theReturn){
  const output = document.getElementById("output1");
  output.innerText = theReturn;
} 

let showReturn2 = function(theReturn){
  const output = document.getElementById("output2");
  output.innerText = theReturn;
} 

let showReturn3 = function(theReturn){
  const output = document.getElementById("output3");
  output.innerText = theReturn;
} 

window.addEventListener("load", function() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let num3 = document.getElementById("num3");
  const lbButton = document.getElementById("lb");
  const ozButton = document.getElementById("oz");
  const gramButton = document.getElementById("gram");
  
  //pounds
  lbButton.addEventListener("click", (event) => {
    showReturn1(lbsToLbs(parseFloat(num1.value)));
    showReturn2(lbsToOz(parseFloat(num1.value)));
    showReturn3(lbsToGrams(parseFloat(num1.value)).toFixed(3));
  })

  //oz
  ozButton.addEventListener("click", (event) => {
    showReturn1(ozToLbs(parseFloat(num2.value)));
    showReturn2(ozToOz(parseFloat(num2.value)));
    showReturn3(ozToGrams(parseFloat(num2.value)).toFixed(3));
  })  

  //grams
  gramButton.addEventListener("click", (event) => {
    showReturn1(gramToLbs(parseFloat(num3.value)));
    showReturn2(gramToOz(parseFloat(num3.value)));
    showReturn3(gramToGram(parseFloat(num3.value)));
  }) 
})

/*

<label for="num1">Enter A unit of Pounds</label>
<input type="number" id="num1" name="number">
<br>
<label for="num2">Enter A unit of Ounces</label>
<input type="number" id="num2" name="number">
<br>
<label for="num3">Enter A unit of Grams</label>
<input type="number" id="num3" name="number">
</form>
<br>
<button id="lb">Calculate Pounds</button>
<button id="oz">Calculate Ounces</button>
<button id="gram">Calculate Grams</button>
<br><br>
<label for="output1">Pounds: </label>
<p id="output1"></p>
<br>
<label for="output2">Ounces: </label>
<p id="output2"></p>
<br>
<label for="output3">Grams: </label>
<p id="output3"></p>

//Old User Logic

// const num1 = window.prompt("Enter amount in pounds");
// window.alert("Coversion of pounds to oz: " + lbsToOz(num1) + " -- Conversion of pounds to grams: " + lbsToGrams(num1));

// const num2 = window.prompt()

*/