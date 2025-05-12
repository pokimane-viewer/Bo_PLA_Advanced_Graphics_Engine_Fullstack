// src/App.jsx
import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import './App.css';

export default function App() {
  const [message, setMessage] = useState('');
  const [minutes, setMinutes] = useState(1);

  const runWargame = async () => {
    try {
      const res = await fetch('/api/run_wargame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ minutes, dt: 1.0, capture_rate: 5 })
      });
      const data = await res.json();
      setMessage(JSON.stringify(data, null, 2));
    } catch {
      setMessage('Error running wargame simulation');
    }
  };

  const runCAD = async () => {
    try {
      const res = await fetch('/run_cad_upgrade', { method: 'POST' });
      const data = await res.json();
      setMessage(JSON.stringify(data, null, 2));
    } catch {
      setMessage('Error running J-20 PL-15 CAD upgrade simulation');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Using D3 version:', d3.version);
  }, []);

  return (
    <div style={{ padding: '1em' }}>
      <h1>PLA Advanced Simulation UI</h1>

      <label>
        Minutes to run the wargame:&nbsp;
        <input
          type="number"
          min="1"
          value={minutes}
          onChange={e => setMinutes(+e.target.value)}
        />
      </label>
      <button onClick={runWargame} style={{ marginLeft: '0.5em' }}>
        Run Wargame
      </button>
      <button onClick={runCAD} style={{ marginLeft: '0.5em' }}>
        Run J-20 PL-15 CAD Upgrade
      </button>

      <h2>Output</h2>
      <pre
        style={{
          background: '#333',
          padding: '1em',
          borderRadius: 4,
          whiteSpace: 'pre-wrap'
        }}
      >
        {message || 'Awaiting results…'}
      </pre>
    </div>
  );
}
