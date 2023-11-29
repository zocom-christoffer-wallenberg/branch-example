import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Error from './views/Error';
import About from './views/About';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />
    },
    {
      path: '/om',
      element: <About />,
    }
]);

export default router;