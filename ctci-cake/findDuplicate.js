 // Find a number that appears more than once ... in O(n) time
function findDuplicate(intArray) {
  const n = intArray.length - 1
  let position = n + 1
  for (let i = 0; i < n; i++){
    position = intArray[position - 1]
   
  }
  
  const inCycle = position
  let current = intArray[position - 1]
  let steps = 1
  while (current !== inCycle){
    current = intArray[current - 1]
    steps++
  }
  
  let start = n + 1
  let ahead = n + 1 
  for (let i = 0; i < steps; i++) {
    ahead = intArray[ahead - 1]
  }
  
  while (start !== ahead) {
    start = intArray[start -1]
    ahead = intArray[ahead -1]
  }
  
  return start;
}
