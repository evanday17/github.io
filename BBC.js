var max;

var perc;

var calculatedResult; 

var enterWeight; 

var enterPercentage;

var plates = [45, 35, 25, 15, 10, 5, 2.5];

function calculateWeight () { 

 max = document.getElementById('max');

  perc = document.getElementById('percentage');

  enterWeight = max.value; 

  enterPercentage = perc.value;  

  calculatedResult = enterWeight * enterPercentage / 100; 

  

  if (document.getElementById('male').checked === true && document.getElementById('pounds').checked === true) {  

    calculatedResult = calculatedResult - 45; 

  } 

  else if (document.getElementById('male').checked === true && document.getElementById('kilos').checked === true)
   { 

    calculatedResult = calculatedResult - 20; 

  } 
else if (document.getElementById('female').checked === true && document.getElementById('pounds').checked === true)
   { 

    calculatedResult = calculatedResult - 35; 

  } 
else
 {
  calculatedResult = calculatedResult - 15.8;
}
  console.log('enterWeight', enterWeight); 

  console.log('enterPercentage', enterPercentage);

  console.log(calculatedResult); 

  document.getElementById('result').innerHTML = 'Load Up ' + calculatedResult + ' lbs'

  

}

var plates = [45, 35, 25, 10, 5, 2.5];
var putThemOn = [0,0,0,0,0,0];

function whatPlates(calculatedWeightToLift){
  
  var i = 0;

  while (i < plates.length) {
    if (2*plates[i]<=calculatedWeightToLift) {
      calculatedWeightToLift = calculatedWeightToLift - (2*plates[i]);
      putThemOn[i] += 2;
    }
    if (2*plates[i]>=calculatedWeightToLift) {
      i++;
    }
  }
  return putThemOn;
}
console.log(whatPlates(425));

function doubleIt(inpoot) {
  var fortyFive = inpoot[0];
  var thirtyFive = inpoot[1];
  var twentyFive = inpoot[2];
  var ten = inpoot[3];
  var five = inpoot[4];
  var twoPointFive = inpoot[5];
  return"Put on " + fortyFive + " 45 lb. plates, " + (fortyFive/2) + " on each side," +
  "\n Put on " + thirtyFive + " 35 lb. plates, " + (thirtyFive/2) + " on each side," +
  "\n Put on " + twentyFive + " 25 lb. plates, " + (twentyFive/2) + " on each side," +
  "\n Put on " + ten + " 10 lb. plates, " + (ten/2) + " on each side," +
  "\n Put on " + five + " 5 lb. plates, " + (five/2) + " on each side," +
  "\n Put on " + twoPointFive + " 2.5 lb. plates, " + (twoPointFive/2) + " on each side";
}

console.log(doubleIt(putThemOn));