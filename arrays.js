var chocolateBars = ["snickers", "hundred grand'",  "kitkat", "skittles"];
function addElementToBeginningOfArray (element, array) {
  chocolateBars.unshift("foo", 1);
  return chocolateBars;
  }
   function destructivelyAddElementToBeginningOfArray (element,array) {
     ["foo", ...chocolateBars];
     return chocolateBars;
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