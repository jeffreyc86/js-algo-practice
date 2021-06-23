// create all possible sets / unique array combinations

function superSet(arr) {
  // power set
    let sets = [[]];
  
    // generate the power set and for each new set
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0, len = sets.length; j < len; j++) {
      let tempArr = sets[j].concat(arr[i]);
      sets.push(tempArr);
    }
  }
  
}