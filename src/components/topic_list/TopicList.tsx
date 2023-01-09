import { ITopicCard } from "../../interfaces";
import { TopicCard } from "../topic_card/TopicCard";
import styles from "./TopicList.module.css";

interface AnalogProps {
	cards: Array<ITopicCard>;
}

export const TopicList: React.FC<AnalogProps> = ({ cards }) => {
	return (
		<div className={styles.listWrapper}>
			<ul>
				{cards.map((card) => {
					return (
						<li key={card.id}>
							<TopicCard images={card.images} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};
