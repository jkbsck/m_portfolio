import { IArticle, IArticleCard, ITopic } from "./interfaces";

const articles: Array<IArticle> = [
	{
		id: 1,
		title: "Article 1",
		cards: [
			{
				id: 1,
				title: "Card 1",
				image: "./images/1.jpg",
			},
			{
				id: 2,
				title: "Card 2",
				image: "./images/2.jpg",
			},
			{
				id: 3,
				title: "Card 3",
				image: "./images/3.jpg",
			},
			{
				id: 4,
				title: "Card 4",
				image: "./images/4.jpg",
			},
			{
				id: 5,
				title: "Card 5",
				image: "./images/5.jpg",
			},
		],
	},
	{
		id: 2,
		title: "Article 2",
		cards: [
			{
				id: 1,
				title: "Card 1",
				image: "./images/6.jpg",
			},
		],
	},
	{
		id: 3,
		title: "Article 3",
		cards: [
			{
				id: 1,
				title: "Card 1",
				image: "./images/7.jpg",
			},
			{
				id: 2,
				title: "Card 2",
				image: "./images/8.jpg",
			},
			{
				id: 3,
				title: "Card 3",
				image: "./images/9.jpg",
			},
		],
	},
];

const architectureCards: Array<IArticleCard> = [
	{
		id: 1,
		title: "Card 1",
		image: "./images/architecture/image1.png",
	},
	{
		id: 2,
		title: "Card 2",
		image: "./images/architecture/image2.png",
	},
	{
		id: 3,
		title: "Card 3",
		image: "./images/architecture/image3.png",
	},
	{
		id: 4,
		title: "Card 4",
		image: "./images/architecture/image4.png",
	},
	{
		id: 5,
		title: "Card 5",
		image: "./images/architecture/image5.png",
	},
];

const topics: Array<ITopic> = [
	{
		id: 1,
		title: "Architecture",
		titleColor: "var(--platinum)",
		image: "./images/topics/architecture_topic.png",
	},
	{
		id: 2,
		title: "People",
		titleColor: "var(--platinum)",
		image: "./images/topics/people_topic.jpg",
	},
	{
		id: 3,
		title: "Landscape",
		titleColor: "var(--black-jet)",
		image: "./images/topics/landscape_topic.jpg",
	},
	{
		id: 4,
		title: "Detail",
		titleColor: "var(--platinum)",
		image: "./images/topics/detail_topic.jpg",
	},
];

export { articles, architectureCards, topics };
