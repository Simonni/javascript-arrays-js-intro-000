var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
  return[element, ...array];
  }
   function destructivelyAddElementToBeginningOfArray (element,array) {
     array.unshift(element);
     return array;
   }
  function addElementToEndOfArray(element, array) {
    chocolateBars.push("foo");
    return array;
  }
  function destructivelyAddElementToEndOfArray(element, array){
    chocolateBars[5]='foo';
    return array;
  }
  function destructivelyRemoveElementFromBeginningOfArray(array){
    chocolateBars.shift();
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