import { useState } from "react";
import { ICardImage } from "../../interfaces";
import styles from "./TopicCard.module.css";

interface TopicCardProps {
	images: ICardImage[];
	addNextCard: () => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ images, addNextCard }) => {
	const [cardUpdated, setCardUpdated] = useState<boolean>(false);

	const imageLoadedHandler: React.ReactEventHandler<HTMLImageElement> = (
		event: React.SyntheticEvent<HTMLImageElement, Event>
	) => {
		setCardUpdated(true);

		if (!cardUpdated) {
			addNextCard();
		}
	};

	return (
		<div className={styles.cardWrapper}>
			<ul>
				{images.map((image) => {
					return (
						<li key={image.id}>
							<div className={styles.imageWrapper}>
								<img
									src={image.image}
									alt={image.title}
									onLoad={imageLoadedHandler}
									className={styles.image}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TopicCard;
