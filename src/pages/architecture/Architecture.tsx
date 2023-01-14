import { ITopicCard } from "../../interfaces";
import styles from "./Architecture.module.css";
import TopicList from "../../components/topic_list/TopicList";

interface ArchitectureProps {
	cards: Array<ITopicCard>;
}
const Architecture: React.FC<ArchitectureProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<TopicList cards={cards} />
		</section>
	);
};

export default Architecture;
