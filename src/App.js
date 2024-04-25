import './App.css';
import Header from './components/header';
import HeroBanner from './components/heroBanner';
import RowSection from './components/rowSection';
import ProductListPage from './components/productListPage';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HeroBanner />
      <RowSection />
      <ProductListPage />
      <Footer />
    </div>
  );
}

export default App;
