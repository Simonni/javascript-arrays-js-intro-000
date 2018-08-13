var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
  return[element, ...array];
  }
   function destructivelyAddElementToBeginningOfArray (array, element) {
     array.unshift(element);
     return array;
   }
  function addElementToEndOfArray(array, element) {
    return [...array, element];
  }
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
  }
  function destructivelyRemoveElementFromBeginningOfArray(array){
    return array;
  }
  function removeElementFromBeginningOfArray(array){
    chocolateBars.slice(1);
    return array;
  }
  function destructivelyRemoveElementFromEndOfArray(array){
    chocolateBars.pop();
    return array;
  }
  function removeElementFromEndOfArray(array){
    chocolateBars.slice(0, chocolateBars.length - 1);
    return array;
  }