interface IArticle {
	id: number;
	title: string;
	cards: Array<IArticleCard>;
}

interface IArticleCard {
	id: number;
	title: string;
	image?: string;
}

interface ITopic {
	id: number;
	title: string;
	titleColor: string;
	image?: string;
}

export type { IArticle, IArticleCard, ITopic };
