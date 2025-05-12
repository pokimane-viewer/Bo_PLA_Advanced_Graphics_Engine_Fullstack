// src/AdvancedGraph.js
// Example of a separate advanced visualization component using react-d3-graph

import React from 'react';
import { Graph } from 'react-d3-graph';

const data = {
  nodes: [{ id: 'PLA HQ' }, { id: 'Frontline Unit' }, { id: 'Support Unit' }],
  links: [
    { source: 'PLA HQ', target: 'Frontline Unit' },
    { source: 'PLA HQ', target: 'Support Unit' },
  ],
};

const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: 'red',
    size: 200,
    highlightStrokeColor: 'blue',
  },
  link: {
    highlightColor: 'lightblue',
  },
  width: 600,
  height: 400,
};

function AdvancedGraph() {
  const onClickNode = function(nodeId) {
    alert(`Clicked node ${nodeId}`);
  };

  const onClickLink = function(source, target) {
    alert(`Clicked link between ${source} and ${target}`);
  };

  return (
    <div style={{ margin: '1em' }}>
      <h2>Advanced D3 Graph</h2>
      <Graph
        id="d3-graph"
        data={data}
        config={myConfig}
        onClickNode={onClickNode}
        onClickLink={onClickLink}
      />
    </div>
  );
}

export default AdvancedGraph;
