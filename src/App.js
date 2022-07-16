import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from '@mui/material';
import theme from './theme'
import Cheeses from './components/Cheeses';



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        <Header/>
        <Cheeses/>
        <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
