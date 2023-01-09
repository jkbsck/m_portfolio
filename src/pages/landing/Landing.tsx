import { ITopic } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

interface LandingProps {
	topics: ITopic[];
}

export const Landing: React.FC<LandingProps> = ({ topics }) => {
	const handleTileClick = () => {};

	return (
		<div className={styles.landingWrapper}>
			<div className={styles.landingTilesWrapper}>
				{topics.map((topic: ITopic) => {
					return (
						<Link to={topic.url}>
							<div
								key={topic.id}
								className={styles.landingTile}
								onClick={handleTileClick}
							>
								<div
									className={styles.landingTileImage}
									style={getImageStyle(topic.image)}
								>
									<div className={styles.landingTileTitle}>
										<span
											style={{
												color: topic.titleColor,
												fontSize: topic.fontSize,
											}}
										>
											{topic.title}
										</span>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};
