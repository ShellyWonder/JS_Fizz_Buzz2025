document.addEventListener("DOMContentLoaded", () => {
  updateCopyrightYear();
  document.getElementById("btnSubmit").addEventListener("click", getValues);
});

//get the values from inputs
//controller function
function getValues() {
  //get values from inputs(DOM)
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //VALIDATION:
  //Parse for numbers(inputs)
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  //convert strings to integers
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    let fbArray = fizzBuzz(fizzValue, buzzValue)
    //Call displayData & write values to the DOM;
    displayData(fbArray);
  } else {
    alert("Try again. You must enter a number to play Fizz Buzz!")
  }
}
//DISPLAY: DO FIZZBUZZ
// using a ternary operator, to see other options (A & B) check the code page.
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    let value = (i % fizzValue === 0 ? "Fizz" : "") + (i % buzzValue === 0 ? "Buzz" : "") || i;
    returnArray.push(value);
  }
  return returnArray;
}
/*loop over the array and create a tablerow for each item. (inserted into td's)*/
function displayData(fbArray) {
  //get tbody element from DOM
  let tableBody = document.getElementById("results");

  //get template element from DOM
  let templateRow = document.getElementById("fbTemplate");
  //clear table
  tableBody.innerHTML = "";
  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);

    /*creates the individual rows for the "td"s 
    by putting them into array; modular approach to HTML
     construction without template literals; 
     dumps into the HTML fragment*/
    let rowCols = tableRow.querySelectorAll("td");

    rowCols[0].classList.add(fbArray[index]);
    rowCols[0].textContent = fbArray[index];

    rowCols[1].classList.add(fbArray[index + 1]);
    rowCols[1].textContent = fbArray[index + 1];

    rowCols[2].classList.add(fbArray[index + 2]);
    rowCols[2].textContent = fbArray[index + 2];

    rowCols[3].classList.add(fbArray[index + 3]);
    rowCols[3].textContent = fbArray[index + 3];

    rowCols[4].classList.add(fbArray[index + 4]);
    rowCols[4].textContent = fbArray[index + 4];

    tableBody.appendChild(tableRow);
  }
}
export function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyrightYear").textContent = currentYear;
}
