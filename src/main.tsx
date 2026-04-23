import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

console.log("%c TITAN X BOOT SEQUENCE STARTED ", "background: #00f2ff; color: #000; font-weight: bold;");

const container = document.getElementById('root');

if (!container) {
  console.error("TITAN_SYSTEM: Target root container not found in DOM!");
  document.body.innerHTML = "<h2 style='color:red'>CRITICAL: ROOT ELEMENT MISSING</h2>";
} else {
  try {
    const root = createRoot(container);
    root.render(<App />);
    console.log("%c TITAN X RENDERED SUCCESSFULLY ", "background: #22c55e; color: #000; font-weight: bold;");
  } catch (error) {
    console.error("TITAN_SYSTEM: Render engine crash!", error);
    container.innerHTML = `
      <div style="padding: 40px; background: #1a1a1a; color: #f87171; border: 1px solid #ef4444; margin: 20px; border-radius: 8px;">
        <h2 style="margin: 0 0 10px 0;">系統啟動崩潰 (Render Crash)</h2>
        <p style="margin: 0; font-family: monospace;">${error.message}</p>
      </div>
    `;
  }
}
