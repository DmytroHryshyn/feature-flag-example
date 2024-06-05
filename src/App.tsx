import './App.css';
import { useVariableValue, withDevCycleProvider } from '@devcycle/react-client-sdk'

const useFlag = useVariableValue;

function App() {
  const var1 = useFlag('togglebot-speed', 'default');
  const var2 = useFlag('example-text', 'default');

  return (
    <div className="App">
     togglebot-speed: {var1} &nbsp;
     example-text: {var2}
    </div>
  );
}

export default withDevCycleProvider({ sdkKey: process.env.REACT_APP_DVC ?? ''})(App);
 