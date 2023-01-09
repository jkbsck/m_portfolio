interface ITopic {
	id: number;
	title: string;
	titleColor: string;
	image?: string;
	url: string;
	fontSize: number;
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

export type { ITopic, ICardImage, ITopicCard };
