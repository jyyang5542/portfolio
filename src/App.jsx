import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {MyHeader, MyFooter, MyFloat} from './components/common/index';
import MyRouter from './router/router';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				{/* HEADER */}
				<MyHeader></MyHeader>

				{/* CONTENTS */}
				<div className="MyCont">
					<MyRouter></MyRouter>
				</div>

				{/* FOOTER */}
				<MyFooter></MyFooter>

				{/* FLOAT */}
				<MyFloat></MyFloat>
			</div>
		</BrowserRouter>
	);
}

export default App;
