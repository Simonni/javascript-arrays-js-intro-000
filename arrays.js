var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];
function addElementToBeginningOfArray (array, element) {
  chocolateBars.unshift("foo", 1);
  return array;
  }
   function destructivelyAddElementToBeginningOfArray (array, element) {
     ["foo", ...chocolateBars];
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