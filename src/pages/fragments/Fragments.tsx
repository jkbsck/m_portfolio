import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Fragments.module.css";
import { TopicList } from "../../components/topic_list/TopicList";

interface FragmentsProps {
	cards: Array<ITopicCard>;
	title: string;
}
export const Fragments: React.FC<FragmentsProps> = ({ title, cards }) => {
	return (
		<section className={styles.contentContainer}>
			<div>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<TopicList cards={cards} />
		</section>
	);
};
