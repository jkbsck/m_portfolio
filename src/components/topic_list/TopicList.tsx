import { ITopicCard } from "../../interfaces";
import TopicCard from "../topic_card/TopicCard";
import styles from "./TopicList.module.css";
import Button from "../ui/button/Button";

interface AnalogProps {
	cards: Array<ITopicCard>;
}

const TopicList: React.FC<AnalogProps> = ({ cards }) => {
	return (
		<div className={styles.listWrapper}>
			<Button />
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

export default TopicList;
