import { resultColors, primaryColors } from './mock-colors';

class Node {
  constructor(
    name, 
    adjacents, 
    type, 
    color,
) {
      this.name = name;
      this.adjacents = adjacents;
      this.type = type;
      this.color = color;
  };
};

function createGraph() {
  let graph = [];

  for (let i = 0; i < resultColors.length; i++) {
      let resultColor = new Node(resultColors[i][0], resultColors[i][1], "primary", resultColors[i][2]);
      graph.push(resultColor);
  }

  for (let i = 0; i < primaryColors.length; i++) {
      let color = new Node(primaryColors[i],[], "result", null);
      graph.push(color);
  }

  return graph;
}

export default function mixColors(selectedColors) {
  let possibleColors = [];
  var graph = createGraph();

  for (let i = 0; i < graph.length; i++) {
      var u = graph[i];
      var result = false;

      if (u.type === "primary") {

          for(let j = 0; j < u.adjacents.length; j++){
              result = verify(u.adjacents[j], selectedColors);
              if(!result) {
                  break;
              }
          };
      }

      if (result === true) {
          possibleColors.push(u);
      }
  }
  return possibleColors;
}

function verify(value, selectedColors) {
  var limit = selectedColors.length;
  var result = false

  for (let i = 0; i < limit; i++) {
      if (value === selectedColors[i]) {
          result = true;
          break;
      }
  }
  return result
}