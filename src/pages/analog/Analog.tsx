import { ITopicCard } from "../../interfaces";
import styles from "./Analog.module.css";
import { TopicList } from "../../components/topic_list/TopicList";

interface AnalogProps {
	cards: Array<ITopicCard>;
}

export const Analog: React.FC<AnalogProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<TopicList cards={cards} />
		</section>
	);
};
