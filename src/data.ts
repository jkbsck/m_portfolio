import { ITopicCard, ITopic } from "./interfaces";

const topics: Array<ITopic> = [
	{
		id: 1,
		title: "People",
		titleColor: "var(--platinum)",
		image: "./images/topics/people.jpg",
		url: "/people",
	},
	{
		id: 2,
		title: "Architecture",
		titleColor: "var(--platinum)",
		image: "./images/topics/architecture.jpg",
		url: "/architecture",
	},
	{
		id: 3,
		title: "Analog",
		titleColor: "var(--platinum)",
		image: "./images/topics/analog.jpg",
		url: "/analog",
	},
	{
		id: 4,
		title: "Projec Fragments",
		titleColor: "var(--platinum)",
		image: "./images/topics/project_fragments.jpg",
		url: "/project_fragments",
	},
];

///////////////////////////////////////
// ANALOG CARDS
const analogCards: Array<ITopicCard> = [
	{
		id: "analog1",
		title: "Analog Photo",
		images: [
			{
				id: "analog1img1",
				title: "Analog Photo",
				image: "./images/analog/analog1img1.png",
			},
		],
	},
	{
		id: "analog2",
		title: "Analog Photo",
		images: [
			{
				id: "analog2img1",
				title: "Analog Photo",
				image: "./images/analog/analog2img1.png",
			},
		],
	},
	{
		id: "analog3",
		title: "Analog Photo",
		images: [
			{
				id: "analog3img1",
				title: "Analog Photo",
				image: "./images/analog/analog3img1.png",
			},
		],
	},
	{
		id: "analog4",
		title: "Analog Photo",
		images: [
			{
				id: "analog4img1",
				title: "Analog Photo",
				image: "./images/analog/analog4img1.png",
			},
			{
				id: "analog4img2",
				title: "Analog Photo",
				image: "./images/analog/analog4img2.png",
			},
			{
				id: "analog4img3",
				title: "Analog Photo",
				image: "./images/analog/analog4img3.png",
			},
		],
	},
	{
		id: "analog5",
		title: "Analog Photo",
		images: [
			{
				id: "analog5img1",
				title: "Analog Photo",
				image: "./images/analog/analog5img1.png",
			},
		],
	},
	{
		id: "analog6",
		title: "Analog Photo",
		images: [
			{
				id: "analog6img1",
				title: "Analog Photo",
				image: "./images/analog/analog6img1.png",
			},
			{
				id: "analog6img2",
				title: "Analog Photo",
				image: "./images/analog/analog6img2.png",
			},
		],
	},
	{
		id: "analog7",
		title: "Analog Photo",
		images: [
			{
				id: "analog7img1",
				title: "Analog Photo",
				image: "./images/analog/analog7img1.png",
			},
		],
	},
	{
		id: "analog8",
		title: "Analog Photo",
		images: [
			{
				id: "analog8img1",
				title: "Analog Photo",
				image: "./images/analog/analog8img1.png",
			},
		],
	},
	{
		id: "analog9",
		title: "Analog Photo",
		images: [
			{
				id: "analog9img1",
				title: "Analog Photo",
				image: "./images/analog/analog9img1.png",
			},
		],
	},
	{
		id: "analog10",
		title: "Analog Photo",
		images: [
			{
				id: "analog10img1",
				title: "Analog Photo",
				image: "./images/analog/analog10img1.png",
			},
			{
				id: "analog10img2",
				title: "Analog Photo",
				image: "./images/analog/analog10img2.png",
			},
			{
				id: "analog10img3",
				title: "Analog Photo",
				image: "./images/analog/analog10img3.png",
			},
		],
	},
	{
		id: "analog11",
		title: "Analog Photo",
		images: [
			{
				id: "analog11img1",
				title: "Analog Photo",
				image: "./images/analog/analog11img1.png",
			},
			{
				id: "analog11img2",
				title: "Analog Photo",
				image: "./images/analog/analog11img2.png",
			},
			{
				id: "analog11img3",
				title: "Analog Photo",
				image: "./images/analog/analog11img3.png",
			},
		],
	},
	{
		id: "analog12",
		title: "Analog Photo",
		images: [
			{
				id: "analog12img1",
				title: "Analog Photo",
				image: "./images/analog/analog12img1.png",
			},
		],
	},
	{
		id: "analog13",
		title: "Analog Photo",
		images: [
			{
				id: "analog13img1",
				title: "Analog Photo",
				image: "./images/analog/analog13img1.png",
			},
		],
	},
	{
		id: "analog14",
		title: "Analog Photo",
		images: [
			{
				id: "analog14img1",
				title: "Analog Photo",
				image: "./images/analog/analog14img1.png",
			},
		],
	},
];

// ARCHITECTURE CARDS
const architectureCards: Array<ITopicCard> = [];

// PEOPLE CARDS
const peopleCards: Array<ITopicCard> = [];

// PROJECT FRAGMENTS CARDS
const fragmentsCards: Array<ITopicCard> = [];

export { topics, analogCards, architectureCards, peopleCards, fragmentsCards };
