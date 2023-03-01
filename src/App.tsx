import { ChakraBaseProvider } from '@chakra-ui/react';
import { BrowserRouter} from 'react-router-dom';
import theme from './component/thema/theme';
import { Router } from './component/router/Router';
function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraBaseProvider>
  );
}

export default App;
