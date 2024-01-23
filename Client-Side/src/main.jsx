import ReactDOM from 'react-dom/client';
import './index.css';
import AuthProvider from './AuthProviders/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes.jsx';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
)
