import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Analog.module.css";
import { TopicList } from "../../components/topic_list/TopicList";

interface AnalogProps {
	cards: Array<ITopicCard>;
	title: string;
}

export const Analog: React.FC<AnalogProps> = ({ title, cards }) => {
	return (
		<section className={styles.contentContainer}>
			<div>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<TopicList cards={cards} />
		</section>
	);
};
