import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material'
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
