 // Generate all permutations of the input string
function getPermutations(string) {
  if (string.length<=1){
    return new Set([string])
  }
  const chars = string.slice(0,-1)
  const lastChar = string[string.length-1]
  const perms = getPermutations(chars)
  const final = new Set()
  perms.forEach(perm=>{
    for(let i = 0; i<=chars.length; i++){
      const word = perm.slice(0,i) + lastChar + perm.slice(i)
      final.add(word)
    }
  })
  return final
}


