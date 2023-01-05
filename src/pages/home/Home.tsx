import { IArticleCard } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Home.module.css";

interface HomeProps {
	cards: Array<IArticleCard>;
}
export const Home: React.FC<HomeProps> = ({ cards }) => {
	return (
		<section className={styles.contentContainer}>
			<h1 className={styles.title}>Home</h1>
			{cards.map((card) => {
				return (
					<article key={card.id}>
						<div style={getImageStyle(card.image)}></div>
					</article>
				);
			})}
		</section>
	);
};
