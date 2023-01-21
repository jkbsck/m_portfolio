import { ITopicCard } from "../../interfaces";
import TopicCard from "../topic_card/TopicCard";
import styles from "./TopicList.module.css";
import HomeButton from "../ui/home_button/HomeButton";
import { SlArrowLeft } from "react-icons/sl";
import { useEffect, useState } from "react";

interface AnalogProps {
	cards: Array<ITopicCard>;
}

const TopicList: React.FC<AnalogProps> = ({ cards }) => {
	const [allCards, setAllCards] = useState<Array<ITopicCard>>([]);

	useEffect(() => {
		const initImages: Array<ITopicCard> = cards.slice(0, 1);
		setAllCards(initImages);
	}, [cards]);

	useEffect(() => {}, []);

	const addNextCard = () => {
		const newCards = cards.slice(0, allCards.length + 1);
		setAllCards(newCards);
	};

	return (
		<div className={styles.listWrapper}>
			<HomeButton />
			<ul>
				{allCards.map((card) => {
					return (
						<li key={card.id}>
							<TopicCard images={card.images} addNextCard={addNextCard} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TopicList;
