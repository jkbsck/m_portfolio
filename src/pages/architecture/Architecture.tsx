import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Architecture.module.css";

interface ArchitectureProps {
	cards: Array<ITopicCard>;
}
export const Architecture: React.FC<ArchitectureProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<h1 className={styles.title}>Architecture</h1>
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
