import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Architecture.module.css";
import { TopicList } from "../../components/topic_list/TopicList";

interface ArchitectureProps {
	cards: Array<ITopicCard>;
	title: string;
}
export const Architecture: React.FC<ArchitectureProps> = ({ title, cards }) => {
	return (
		<section className={styles.contentContainer}>
			<div>
				<h1 className={styles.title}>{title}</h1>
			</div>
			<TopicList cards={cards} />
		</section>
	);
};
