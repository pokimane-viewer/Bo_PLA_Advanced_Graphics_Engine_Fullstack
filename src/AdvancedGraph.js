// src/AdvancedGraph.jsx
import React from 'react';
import { Graph } from 'react-d3-graph';

const data = {
  nodes: [
    { id: 'PLA HQ' },
    { id: 'Frontline Unit' },
    { id: 'Support Unit' }
  ],
  links: [
    { source: 'PLA HQ', target: 'Frontline Unit' },
    { source: 'PLA HQ', target: 'Support Unit' }
  ]
};

const config = {
  nodeHighlightBehavior: true,
  node: { color: 'red', size: 200, highlightStrokeColor: 'blue' },
  link: { highlightColor: 'lightblue' },
  width: 600,
  height: 400
};

export default function AdvancedGraph() {
  return (
    <div style={{ margin: '1em' }}>
      <h2>Advanced D3 Graph</h2>
      <Graph
        id="pla-graph"
        data={data}
        config={config}
        onClickNode={id => alert(`Clicked node ${id}`)}
        onClickLink={(s, t) => alert(`Clicked link between ${s} and ${t}`)}
      />
    </div>
  );
}
