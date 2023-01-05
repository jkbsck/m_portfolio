import { ITopic } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Landing.module.css";

interface LandingProps {
	topics: Array<ITopic>;
}

export const Landing: React.FC<LandingProps> = ({ topics }) => {
	return (
		<div className={styles.landingWrapper}>
			<div className={styles.landingTilesWrapper}>
				{topics.map((topic: ITopic) => {
					return (
						<div key={topic.id} className={styles.landingTile}>
							<div
								className={styles.landingTileImage}
								style={getImageStyle(topic.image)}
							>
								<div className={styles.landingTileTitle}>
									<span style={{ color: topic.titleColor }}>{topic.title}</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
