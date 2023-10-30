import './native';
import 'core-js/stable';

import { createRoot } from 'react-dom/client';
import { App } from 'src/components/container';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
