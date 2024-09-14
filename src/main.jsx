import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import GenreListPage from './pages/GenreListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import MovieListPage from './pages/MovieListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Home /> },
    { path: 'Filmes', element: <MovieListPage /> },
    { path: '/Filmes/:id', element: <MovieDetailPage /> },
    { path: '/ListadeGeneros/', element: <GenreListPage/> },
    { path: '/ListadeGeneros/:id', element: <MoviesByGenrePage/> }
    // {path:'Page Not Found', element: <Pagenotfound/>},
  ]
}])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
