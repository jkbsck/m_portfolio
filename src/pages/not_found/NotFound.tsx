import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
	return (
		<div className={styles.notFoundWrapper}>
			<div className={styles.notFound}>
				<h1>404</h1>
				<h3>Page doesn't exist</h3>
				<Link to="/" className={styles.homeLink}>
					Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
