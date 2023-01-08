import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./People.module.css";

interface PeopleProps {
	cards: Array<ITopicCard>;
}
export const People: React.FC<PeopleProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<h1 className={styles.title}>People</h1>
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
