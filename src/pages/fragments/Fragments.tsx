import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Fragments.module.css";

interface FragmentsProps {
	cards: Array<ITopicCard>;
}
export const Fragments: React.FC<FragmentsProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<h1 className={styles.title}>Project Fragments</h1>
			{cards.map((card) => {
				return (
					<article key={card.id}>
						<div
							className={styles.image}
							style={getImageStyle(card.image)}
						></div>
					</article>
				);
			})}
		</section>
	);
};
