import './App.css';
import TopBar from './components/TopBar';
import PrimeraApi from './components/PrimeraApi'
import Brand1 from './components/Brands1';
import UltimoProductoEnDb from './components/UltimoProductoCreado';
import Footer from './components/Footer';

function App ( ) { 
  return ( 
    <>
        <TopBar /> 
        <div className='max-w-[1480px] m-auto'> 
          <PrimeraApi />
          <Brand1/>
          <UltimoProductoEnDb/>
        </div>
        <Footer />
    </>

  );
}



export default App;
