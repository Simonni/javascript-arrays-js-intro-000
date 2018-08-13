var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
  chocolateBars.unshift("element");
  return array;
  }
   function destructivelyAddElementToBeginningOfArray (array, element) {
     ["element, ...chocolateBars"];
     return array;
   }
  function addElementToEndOfArray(array, element) {
    chocolateBars.push("element");
    return array;
  }
  function destructivelyAddElementToEndOfArray(array, element){
    chocolateBars[5]='element';
    return array;
  }
  function destructivelyRemoveElementFromBeginningOfArray(array){
    chocolateBars.shift();
  }
  
