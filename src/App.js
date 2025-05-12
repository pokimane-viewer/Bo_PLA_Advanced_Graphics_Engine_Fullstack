// src/App.js
import React, { useState } from 'react';
import * as d3 from 'd3';
import './App.css';

function App() {
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
      setMessage(JSON.stringify(data));
    } catch (err) {
      setMessage('Error running wargame simulation');
    }
  };

  const runCAD = async () => {
    try {
      const res = await fetch('/run_cad_upgrade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      setMessage(JSON.stringify(data));
    } catch (err) {
      setMessage('Error running J-20 PL-15 CAD upgrade simulation');
    }
  };

  console.log('Using D3 version:', d3.version);

  return (
    <div style={{ padding: '1em', fontFamily: 'sans-serif', color: '#eee' }}>
      <h1>PLA Advanced Simulation UI</h1>
      <div style={{ marginBottom: '1em' }}>
        <label>Minutes to run the wargame: </label>
        <input
          type="number"
          value={minutes}
          onChange={e => setMinutes(parseInt(e.target.value, 10))}
        />
        <button onClick={runWargame}>Run Wargame</button>
        <button onClick={runCAD}>Run J-20 PL-15 CAD Upgrade</button>
      </div>
      <div>
        <h2>Output</h2>
        <pre style={{ background: '#333', padding: '1em', borderRadius: '4px' }}>
          {message}
        </pre>
      </div>
    </div>
  );
}

export default App;
