function routeBetweenNodes(graph, source, destination) {
  const visited = new Set();

  return hasRoute(graph, source, destination, visited);
}

function hasRoute(graph, source, destination, visited) {
  visited.add(source);
  if (source === destination) return true;

  let result = false;

  graph[source].forEach(vertex => {
    if (!visited.has(vertex)) {
      result = result || hasRoute(graph, vertex, destination, visited);
    }
  });

  return result;
}

module.exports = routeBetweenNodes;
