import { createRoot } from 'react-dom/client';
import Routing from './Routing';
// import 'translations/i18n';


const container = document.getElementById('root');
if (container)
{
    const root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Routing />);
}
