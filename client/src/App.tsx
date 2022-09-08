import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components';
import { Login, Register } from './pages';

const App: React.FC = () => {
	return (
		<div className="app app_flex">
			<Navbar />
			<Routes>
				<Route path="/" element={<h1>Loga aí</h1>} />
				<Route path="/login" element={<Login />} />
				<Route path="/cadastro" element={<Register />} />
			</Routes>
		</div>
	);
};

export default App;
