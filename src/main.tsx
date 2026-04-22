import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

console.log("TITAN_SYSTEM: BOOTING...");

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    document.body.innerHTML = "<h1>FATAL: ROOT NOT FOUND</h1>";
}
