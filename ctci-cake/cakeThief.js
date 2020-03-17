// Calculate the maximum value we can carry
function maxDuffelBagValue(cakeTypes, weightCapacity) {
  const maxValues = new Array(weightCapacity + 1).fill(0);
  for(let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++){
    
    for(let i = 0; i<cakeTypes.length; i++){
      let currentCake = cakeTypes[i]
      if(currentCake.weight === 0 && currentCake.value > 0) return Infinity
      if(currentCake.weight > currentCapacity) continue
      let tempVal = currentCake.value
      tempVal += maxValues[currentCapacity-currentCake.weight]
      maxValues[currentCapacity] = Math.max(maxValues[currentCapacity],tempVal)
    }
  }
  return maxValues[weightCapacity]
}

const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];
const capacity = 20;
maxDuffelBagValue(cakeTypes, capacity);
// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)

