import Landing from "./pages/landing/Landing";
import About from "./pages/about/About";
import Analog from "./pages/analog/Analog";
import Architecture from "./pages/architecture/Architecture";
import Fragments from "./pages/fragments/Fragments";
import People from "./pages/people/People";
import {
	analogCards,
	architectureCards,
	peopleCards,
	fragmentsCards,
	topics,
	about,
} from "./data";
import { Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Landing topics={topics} />} />
				<Route path="/about" element={<About about={about} />} />
				<Route path="/analog" element={<Analog cards={analogCards} />} />
				<Route
					path="/architecture"
					element={<Architecture cards={architectureCards} />}
				/>
				<Route
					path="/project_fragments"
					element={<Fragments cards={fragmentsCards} />}
				/>
				<Route path="/people" element={<People cards={peopleCards} />} />
			</Routes>
		</div>
	);
};

export default App;
