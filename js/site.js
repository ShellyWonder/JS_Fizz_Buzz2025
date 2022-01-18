//get the values from inputs
//starts (controller function)
function getValues() {
  //get values from inputs(DOM)
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //VALIDATE INPUTS to convert strings to integers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //call fizzBuzz():
    let fbArray = fizzBuzz(fizzValue, buzzValue);
    //call displayData():
    displayData(fbArray);
  } else {
    alert("You must enter numbers.");
  }
}

//generate numbers from fizzValue and buzzValue
//logic function(for loop)
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    ///Determining FizzBuzz (3 AND 5) fizz(/3) and buzz(/5)
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {
      returnArray.push(i);
    }
  }
  return returnArray;
}

//display or view functions (RETURN)
function displayData(fbArray) {
  //pull in tableBody element from DOM
  let tableBody = document.getElementById("results");
  //pull in template row
  let templateRow = document.getElementById("fbTemplate");
  //clear the table
  tableBody.innerHTML = "";
  for (let index = 0; index < fbArray.length; index += 5) {
    let tableRow = document.importNode(templateRow.content, true);
    //sets up columns by pulling td's content into array
    //Alt: Modular way to construct HTML without using strings or template literals
    //interjecting data from the for loop into the DOM 's template element
    let rowCols = tableRow.querySelectorAll("td");

    //injects CSS classes to style "fizz", "buzz" and "FizzBuzz" , adding the value as a class name
    //add all rows to the table
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
