
import './App.css';

import Mycontanier from './Mycontanier';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  
  typography: {fontFamily:['Jamelbold']     }
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Mycontanier/>


    </div></ThemeProvider>
  );
}

export default App;
