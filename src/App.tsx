import React from "react";
import "./App.css";
import Lotto from "./components/lotto/Lotto";

function App() {
	return (
		<div className="App">
			<Lotto title="Lotto" maxNum={40} numBalls={6} />
			<Lotto title="Mini Lotto" maxNum={20} numBalls={4} />
			<Lotto title="Strong number" maxNum={10} numBalls={1} />
		</div>
	);
}

export default App;
