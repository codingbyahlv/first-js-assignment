/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;
  
function taskOne() {
  //if the div isn´t blue (blue = false) the background-color changes blue, and "let blue" become true
  if (!blue){
    document.getElementById("answer-one").style.backgroundColor = "blue";
    blue = true;  
  } else {  //else the div is blue (blue = true) the background-color changes to white, and "let blue" become false
    document.getElementById("answer-one").style.backgroundColor = "white";
    blue = false;
  }
}

/*From now: I switch to querySelector instead of getElement... Only showing in the first task knowing them both*/ 

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  //declaring the const addNumber and giving it a random number (0-1000)
  const addNumber = Math.floor(Math.random() * 1001);
  //pushing/adding the new random number to the array
  numbers.push(addNumber);
  //printing out the array in the html-div
  document.querySelector("#answer-two").innerHTML = numbers;
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  //declaring a new date const
  const date = new Date(); 
  //calling the getDay function, get a number (0-6) back representing the weekdays
  weekday = date.getDay();
  //if the number (weekday) is 6 (saturday) or 0 (sunday) alert..
  if (weekday == 6 || weekday == 0){
    alert("Woohooo it's weekend");
  } else {
    alert("FML");
  }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
  //if the type of both values are numbers
  if (typeof valueOne == "number" && typeof valueTwo == "number"){
    const product = valueOne * valueTwo;
    alert("Produkten är " + product);
  } else {
    alert("Jag kan bara multiplicera nummer")
  }
}

function taskFour() {
  //onclick, calling the function "multiplier" with two values
  multiplier(5, 10);
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  for (let i = 0; i < fruits.length; i++){
    if (fruits[i] == "apelsin" || fruits[i] == "päron"){
      //if the element matches apelsin or päron push to the array trash
      trash.push(fruits[i]);
    } else {
      //else push to the array eatable
      eatable.push(fruits[i]);
    }
  }
  //print out the arrays in html-div
  document.querySelector("#answer-five").innerHTML = "<b>Ätligt: </b>" + eatable + "<br>" + "<b>Skräp: </b>" + trash;
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  //for every index (object) in the array persons
  for (let i in persons){
    //if the person/index[i] is older or 30
    if (persons[i].age >= 30){
      //push the persons name to the overThirty array
      overThirty.push(persons[i].name);
    } else {
      //push the name to the underThirty array
      underThirty.push(persons[i].name);
    }
  }
  //for every index (object) in the array persons
  for (let i in persons){
    //if the person/index[i] is married/true
    if (persons[i].married){
      //push the persons name to the married array
      married.push(persons[i].name);
    } else {
      //push the name to the notMarried array
      notMarried.push(persons[i].name);
    }
  }
  //print out the arrays in html div
  document.querySelector("#answer-six").innerHTML = "<b>Över 30: </b>" + overThirty + "<br>" + "<b>Under 30: </b>" + underThirty + "<br>" + "<b>Gift: </b>" + married + "<br>" + "<b>Ogift</b> " + notMarried;
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven(){
  //search every "," global and replace it with "," and a linebreak
  let lineBreaks = addMeSomeLineBreaks.replace(/,/gi,",<br>");
  //print out the text with the linebreaks
  document.querySelector("#answer-seven").innerHTML = lineBreaks;
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

//declaring a const instead of writing the same (document. etc...) every time
const divEight = document.querySelector("#card-eight");

//showing the div
function turnBack(){
  divEight.style.display = "block";
  // bonus ;) 
  document.querySelector("#answer-eight").innerHTML = "<center>The div is back!<br>(But the button is replaced by a textline ;) )</center>";
}

//onclick function for hiding the div
function taskEight() {
  //hide
  divEight.style.display = "none";
  //calling the function turnBack after 3s
  setTimeout(turnBack, 3000); 
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  //declaring a const for the div backgrounds (the different divs with the same class name gets an indexposition)
  const answerBackground = document.querySelectorAll(".answer-container");
  //declaring a new date const
  const date = new Date();
  //calling the getHours function, get a number (0-23) back representing the hours
  const time = date.getHours();

  if (time > 17){
    //creating a loop to get the blue background of all class elements (all index)
    //i = 0; continue as long as i is smaller than the answerBackground.lenght; for each loop add 1 to i
    for (let i = 0; i < answerBackground.length; i++) {
      //for each index turn the background blue
      answerBackground[i].style.backgroundColor = "blue";
    }
  } else {
    for (let i = 0; i < answerBackground.length; i++) {
      //for each index turn the background reds
      answerBackground[i].style.backgroundColor = "red";
    }
  }
} 

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  //if the type of both values are numbers
  if (typeof valueOne == "number" && typeof valueTwo == "number"){
    //and if the string matches add, subtract etc.. go on with the calculation
    if (operator == "add" || operator == "subtract" || operator == "multiply" || operator == "divide"){
      let sum = 0;
      switch(operator){
        //the string tells which operator we should use
        case "add": 
          sum = valueOne + valueTwo;
          alert(valueOne + " + " + valueTwo + " = " + sum);
          break;
        case "subtract":
          sum = valueOne - valueTwo;
          alert(valueOne + " - " + valueTwo + " = " + sum);
          break;
        case "multiply":
          sum = valueOne * valueTwo;
          alert(valueOne + " * " + valueTwo + " = " + sum);
          break;
        case "divide":
          sum = valueOne / valueTwo;
          alert(valueOne + " / " + valueTwo + " = " + sum);
          break;
      }
    } else {
      alert("Något är fel");
    }
  } else {
    alert("Något är fel");
  }
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(5, 4, "subtract");
}
