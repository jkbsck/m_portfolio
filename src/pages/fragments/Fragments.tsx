import { ITopicCard } from "../../interfaces";
import styles from "./Fragments.module.css";
import { TopicList } from "../../components/topic_list/TopicList";

interface FragmentsProps {
	cards: Array<ITopicCard>;
}
export const Fragments: React.FC<FragmentsProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<TopicList cards={cards} />
		</section>
	);
};
