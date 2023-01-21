import { ITopicCard } from "../../interfaces";
import styles from "./Architecture.module.css";
import TopicList from "../../components/topic_list/TopicList";
import AboutButton from "../../components/ui/about_button/AboutButton";
import ScrollTopButton from "../../components/ui/scroll_top_button/ScrollTopButton";

interface ArchitectureProps {
	cards: Array<ITopicCard>;
}
const Architecture: React.FC<ArchitectureProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<TopicList cards={cards} />
			<AboutButton />
			<ScrollTopButton />
		</section>
	);
};

export default Architecture;
