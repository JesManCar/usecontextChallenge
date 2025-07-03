import './App.css'; // Archivo de estilos CSS
import { ThemeProvider } from './themes/ThemeContent';
import  Button  from './components/Button';


const App = () => {
  return (
    <ThemeProvider>
      <h1>UseContext Challenge</h1>
      <p>Click the button to change the theme</p>
      <Button/>
    </ThemeProvider>
    
  );
};

export default App;
