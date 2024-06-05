import './App.css';
import {
	useVariableValue,
	withDevCycleProvider,
} from '@devcycle/react-client-sdk';

const useFlag = useVariableValue;

function App() {
	const var1 = useFlag('togglebot-speed', 'default');
	return (
		<div className="App">
			togglebot-speed: {var1} &nbsp; example-text: {'replaced_with_value'}
		</div>
	);
}

export default withDevCycleProvider({
	sdkKey: process.env.REACT_APP_DVC ?? '',
})(App);
