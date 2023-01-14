import { ITopicCard } from "../../interfaces";
import styles from "./People.module.css";
import TopicList from "../../components/topic_list/TopicList";

interface PeopleProps {
	cards: Array<ITopicCard>;
}
const People: React.FC<PeopleProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<TopicList cards={cards} />
		</section>
	);
};

export default People;
