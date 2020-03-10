// Find the shortest route in the network between the two users
// const graph = {
//   'a': ['b', 'c', 'd'],
//   'b': ['a', 'd'],
//   'c': ['a', 'e'],
//   'd': ['a', 'b'],
//   'e': ['c'],
//   'f': ['g'],
//   'g': ['f']
// };
// let actual = getPath(graph, 'a', 'e');
// let expected = ['a', 'c', 'e'];

function getPath(graph, startNode, endNode) {
  if(!graph[startNode]||!graph[endNode]) throw error
  let previous = {}
  let visited = []
  let q = new Queue
  let currentVertex;
  let finalPath = []
  
  q.enqueue(startNode)
  
  while(q.queue.length){
    currentVertex = q.dequeue()
    if(currentVertex === endNode){
      while(previous[currentVertex]){
        finalPath.push(currentVertex)
        currentVertex = previous[currentVertex]
      }
      finalPath.push(startNode)
      break;
    }
    visited.push(currentVertex)
    let neighbors = graph[currentVertex]
    for(let neighbor in neighbors){
       let neighborNode = neighbors[neighbor]
      if(!visited.includes(neighborNode)){
         q.enqueue(neighborNode)
         previous[neighborNode] = currentVertex
      }
    }
  }
  return finalPath.length ? finalPath.reverse(): null
}
