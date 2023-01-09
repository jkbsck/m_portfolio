import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./People.module.css";
import { TopicList } from "../../components/topic_list/TopicList";

interface PeopleProps {
	cards: Array<ITopicCard>;
	title: string;
}
export const People: React.FC<PeopleProps> = ({ title, cards }) => {
	return (
		<section className={styles.contentContainer}>
			<div>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<TopicList cards={cards} />
		</section>
	);
};
