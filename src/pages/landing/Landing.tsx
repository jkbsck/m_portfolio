import { ITopic } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Landing.module.css";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

interface LandingProps {
	topics: Array<ITopic>;
}

export const Landing: React.FC<LandingProps> = ({ topics }) => {
	useEffect(() => {});

	const handleTileClick = () => {};

	return (
		<div className={styles.landingWrapper}>
			<div className={styles.landingTilesWrapper}>
				{topics.map((topic: ITopic) => {
					return (
						<NavLink to="/topic">
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
										<span style={{ color: topic.titleColor }}>
											{topic.title}
										</span>
									</div>
								</div>
							</div>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};
