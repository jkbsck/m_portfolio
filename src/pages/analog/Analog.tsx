import { ITopicCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Analog.module.css";

interface AnalogProps {
	cards: Array<ITopicCard>;
}
export const Analog: React.FC<AnalogProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<div>
				<h1 className={styles.title}>Analog</h1>
			</div>

			{/* <h1 className={styles.title}>Analog</h1>
			{cards.map((card) => {
				return (
					<article key={card.id}>
						<div
							className={styles.image}
							style={getImageStyle(card.image)}
						></div>
					</article>
				);
			})} */}
		</section>
	);
};
