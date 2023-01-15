interface ITopic {
	id: number;
	title: string;
	titleColor: string;
	image?: string;
	url: string;
	fontSize: string;
}

interface IAbout {
	title: string;
	description: string;
	email: string;
	image: string;
	instagram: string;
	facebook: string;
}

interface ICardImage {
	id: string;
	title: string;
	image: string;
}

interface ITopicCard {
	id: string;
	title: string;
	images: ICardImage[];
}

export type { ITopic, IAbout, ICardImage, ITopicCard };
