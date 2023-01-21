// import Landing from "./pages/landing/Landing";
import Loading from "./components/loading/Loading";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import About from "./pages/about/About";
// import Analog from "./pages/analog/Analog";
// import Architecture from "./pages/architecture/Architecture";
// import Fragments from "./pages/fragments/Fragments";
// import People from "./pages/people/People";
import {
	analogCards,
	architectureCards,
	peopleCards,
	fragmentsCards,
	topics,
	about,
} from "./data";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Landing = lazy(() => import("./pages/landing/Landing"));
const About = lazy(() => import("./pages/about/About"));
const Analog = lazy(() => import("./pages/analog/Analog"));
const Architecture = lazy(() => import("./pages/architecture/Architecture"));
const Fragments = lazy(() => import("./pages/fragments/Fragments"));
const People = lazy(() => import("./pages/people/People"));

const App = () => {
	return (
		<div className="app">
			<Suspense fallback={<Loading />}>
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
			</Suspense>
		</div>
	);
};

export default App;
