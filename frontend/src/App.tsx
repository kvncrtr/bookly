import { 
  Routes,
  Navigate,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Layout from './layouts/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
