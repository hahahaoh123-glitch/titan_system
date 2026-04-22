import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

console.log("TITAN_SYSTEM: Checking DOM and Booting...");

const rootElement = document.getElementById('root');
if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    console.log("TITAN_SYSTEM: Rendered successfully.");
  } catch (err) {
    console.error("TITAN_SYSTEM: Render Error", err);
    rootElement.innerHTML = `
      <div style="padding: 20px; color: #ff0000; font-family: monospace; background: #000; height: 100vh;">
        <h2>FATAL BOOT ERROR</h2>
        <pre>${err.message}</pre>
        <pre>${err.stack}</pre>
      </div>
    `;
  }
} else {
  console.error("TITAN_SYSTEM: Target #root not found.");
}
