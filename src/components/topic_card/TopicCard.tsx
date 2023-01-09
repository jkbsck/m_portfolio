import { ICardImage } from "../../interfaces";
import styles from "./TopicCard.module.css";

interface TopicCardProps {
	images: ICardImage[];
}

export const TopicCard: React.FC<TopicCardProps> = ({ images }) => {
	return (
		<div className={styles.cardWrapper}>
			<ul>
				{images.map((image) => {
					return (
						<li key={image.id}>
							<div className={styles.imageWrapper}>
								<img src={image.image} alt={image.title} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
