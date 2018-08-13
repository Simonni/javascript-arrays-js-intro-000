// define var. chocolateBars
var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];

// define 2 functions that take 2 parameter, array & element
// add element at the beginning of array 
function addElementToBeginningOfArray (array, element) {
  return[element, ...array];
  }
function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
   }
  //define 2 functions that add to the end of the array 
  function addElementToEndOfArray(array, element) {
    return [...array, element];
  }
  function destructivelyAddElementToEndOfArray(array, element){
    array.push(element);
    return array;
  }
  function accessElementInArray (array, index){
    return array[index]
  }
  function destructivelyRemoveElementFromBeginningOfArray(array){
    array.shift();
    return array;
  }
  function removeElementFromBeginningOfArray(array){
    return array.slice(1);
  }
  function destructivelyRemoveElementFromEndOfArray(array){
    array.pop();
    return array;
  }
  function removeElementFromEndOfArray(array){
    return array.slice(0, arrary.length - 1);
  }