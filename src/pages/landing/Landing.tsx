import { ITopic } from "../../interfaces";
import { getImageStyle } from "../../utils";
import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import AboutButton from "../../components/ui/about_button/AboutButton";

interface LandingProps {
	topics: ITopic[];
}

const Landing: React.FC<LandingProps> = ({ topics }) => {
	return (
		<div className={styles.landingWrapper}>
			<div className={styles.landingTilesWrapper}>
				{topics.map((topic: ITopic) => {
					return (
						<Link key={topic.id} to={topic.url}>
							<div key={topic.id} className={styles.landingTile}>
								<div
									className={styles.landingTileImage}
									style={getImageStyle(topic.image)}
								>
									<div className={styles.landingTileTitle}>
										<span
											style={{
												color: topic.titleColor,
											}}
											className={
												topic.fontSize === "L"
													? styles.fontLarge
													: styles.fontMedium
											}
										>
											{topic.title}
										</span>
									</div>
								</div>
								<div className={styles.darkenBox}></div>
							</div>
						</Link>
					);
				})}
			</div>
			<AboutButton />
		</div>
	);
};

export default Landing;
