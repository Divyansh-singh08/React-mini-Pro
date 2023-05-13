// import "./App.css";

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
	return (
		<>
			{/* <Navbar title="BlogD" aboutText="About" /> */}
			<Navbar title="BlogD" />
			<div className="container my-3">
				<TextForm heading="Enter the Text" />
			</div>

			{/* <Navbar/> */}
		</>
	);
}

export default App;

// title is pass as a props
