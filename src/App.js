import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const auth = useSelector((state) => state.auth);

	const dispatch = useDispatch();

	const login = () => {
		dispatch({ type: 'LOGIN' });
	};

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
	};

	return (
		<div>
			El usuario esta conectado - {auth ? 'Verdadero' : 'Falso'}
			<br />
			{auth ? <button onClick={logout}>Desconectarse</button> : <button onClick={login}>Conectarse</button>}
		</div>
	);
}

export default App;
