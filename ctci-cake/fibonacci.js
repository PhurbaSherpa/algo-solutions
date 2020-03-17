
  // Compute the nth Fibonacci number
function fib(n) {
  if(n<0){
    throw error
  } else if ( n === 0 || n === 1) return n
  
  let first = 0
  let second = 1
  let current;
  
  for(let i = 1; i < n; i++)
  {
    current = first + second
    first = second 
    second = current
  }
  
  return current
}


