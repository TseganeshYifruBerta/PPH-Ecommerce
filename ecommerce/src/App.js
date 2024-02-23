import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import ProductList from "./components/product/ProductList";
import ProductFiltering from "./components/product/ProductFilter";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="min-h-screen flex flex-wrap bg-gray-100">
        <ProductFiltering />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
