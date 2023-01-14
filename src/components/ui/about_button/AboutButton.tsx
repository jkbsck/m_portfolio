import { Link } from "react-router-dom";
import styles from "./AboutButton.module.css";

const AboutButton = () => {
	return (
		<div className={styles.buttonWrapper}>
			<div className={styles.gap}></div>
			<Link to="/about">About Me</Link>
		</div>
	);
};

export default AboutButton;
