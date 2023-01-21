import { ITopicCard } from "../../interfaces";
import styles from "./Analog.module.css";
import TopicList from "../../components/topic_list/TopicList";
import AboutButton from "../../components/ui/about_button/AboutButton";
import ScrollTopButton from "../../components/ui/scroll_top_button/ScrollTopButton";

interface AnalogProps {
	cards: Array<ITopicCard>;
}

const Analog: React.FC<AnalogProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<TopicList cards={cards} />
			<AboutButton />
			<ScrollTopButton />
		</section>
	);
};

export default Analog;
