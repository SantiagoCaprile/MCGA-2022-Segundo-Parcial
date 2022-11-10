import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Products from './screens/Products';
import Layout from './components/Layout';
import CreateProduct from './screens/CreateProduct';
import EditProduct from './screens/EditProduct';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/new" element={<CreateProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
