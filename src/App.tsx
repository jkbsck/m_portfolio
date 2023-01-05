import { Home } from "./pages/home/Home";
// import { Main } from "./pages/main/Main";
// import { Carousel } from "./pages/Carousel";
// import { Header } from "./components/header/Header";
// import { Footer } from "./components/footer/Footer";
import { articles, architectureCards, topics } from "./data";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/landing/Landing";

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Landing topics={topics} />} />
				<Route path="/topic" element={<Home cards={architectureCards} />} />
			</Routes>

			{/* <Header />
			<div className="content-wrapper">
				<Routes>
					<Route path="/" element={<Home cards={architectureCards} />} />
					<Route path="/main" element={<Main articles={articles} />} />
					<Route path="/carousel" element={<Carousel articles={articles} />} />
				</Routes>
			</div>
			<Footer /> */}
		</div>
	);
};

export default App;
