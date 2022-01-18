//get values from the DOM: fizzValue & buzzValue;
function getValues() {
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //VALIDATION:
  //Parse for numbers
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  // convert strings to integers;
  if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
    //LOGIC: CALL fizzBuzz--replace fizzBuzzA with alternative functions fizzBuzzB &fizzBuzzC HERE to test them
    let fbArray = fizzBuzzA(fizzValue, buzzValue);
    //CALL displayData & write values to the screen;
    displayData(fbArray);
  } else {
    alert("You must enter an integer.");
  }

  //DISPLAY:Do fizzbuzz
}
function fizzBuzzA(fizzValue, buzzValue) {
  let returnArray = [];
  //loop 1-100
  for (let i = 1; i <= 100; i++) {
    //Replace the number feature:
    //number / fizzValue && number / buzzValue =FizzBuzz)
    if (i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if (i % fizzValue == 0) {
      // (number / fizzValue = Fizz;
      returnArray.push("Fizz");
    } else if (i % buzzValue == 0) {
      //number / buzzValue = Buzz;
      returnArray.push("Buzz");
    } else {
      /*IF none of the above conditions apply to the number, push the number itself into returnArray;*/
      returnArray.push(i);
    }
  }

  return returnArray;
}
/*alternate method using a SWITCH statement; to test, chng function called on line 13 to fizzBuzzB*/
function fizzBuzzB(fizzValue, buzzValue) {
  let returnArray = [];
  //declaring the booleans:
  let Fizz = false;
  let Buzz = false;
  for (let i = 1; i <= 100; i++) {
    Fizz = i % fizzValue === 0;
    Buzz = i % buzzValue === 0;

    switch (true) {
      case Fizz && Buzz: {
        returnArray.push("FizzBuzz");
        break;
      }
      case Fizz: {
        returnArray.push("Fizz");
        break;
      }
      case Buzz: {
        returnArray.push("Buzz");
        break;
      }
      default: {
        returnArray.push(i);
        break;
      }
    }
  }
  return returnArray;
}
/*alternate method using a ternary operator(most compact--one line); to test, chng function called on line 13 to fizzBuzzC*/
function fizzBuzzC(fizzValue, buzzValue) {
  let returnArray = [];
  for (let i = 1; i <= 100; i++) {
    let value =
      (i % fizzValue == 0 ? "Fizz" : "") +
      (i % buzzValue == 0 ? "Buzz" : "" || i);
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
    /*creates the individual rows for the "td"s by putting them into array; modular approach to HTML construction without template literals; dumps into the HTML fragment*/

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
