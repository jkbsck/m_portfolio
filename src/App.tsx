import { Landing } from "./pages/landing/Landing";
import { Analog } from "./pages/analog/Analog";
import { Architecture } from "./pages/architecture/Architecture";
import { Fragments } from "./pages/fragments/Fragments";
import { People } from "./pages/people/People";
import {
	analogCards,
	architectureCards,
	peopleCards,
	fragmentsCards,
	topics,
} from "./data";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Landing topics={topics} />} />
				<Route
					path="/analog"
					element={<Analog title="Analog" cards={analogCards} />}
				/>
				<Route
					path="/architecture"
					element={
						<Architecture title="Architecture" cards={architectureCards} />
					}
				/>
				<Route
					path="/project_fragments"
					element={
						<Fragments title="Project Fragments" cards={fragmentsCards} />
					}
				/>
				<Route
					path="/people"
					element={<People title="People" cards={peopleCards} />}
				/>
			</Routes>
		</div>
	);
};

export default App;
