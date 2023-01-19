import './App.css';
import Navigation from './components/navigation/Navigation';
import Homepage from './components/homepage/Homepage'
import styled from 'styled-components';

//Styling is in App.css

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Homepage />
    </AppContainer>
  );
}

export default App;
