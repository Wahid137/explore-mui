import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'
import { theme } from './theme/theme';
import Home from './Pages/Home/Home';
import Layout from './Components/Layout/Layout';
const router = createBrowserRouter([
  {
    element: <Layout></Layout>,
    path: '/',
    children: [
      {
        element: <Home />,
        path: '/',
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <CssBaseline />
      </RouterProvider>
    </ThemeProvider>

  );
}

export default App;
