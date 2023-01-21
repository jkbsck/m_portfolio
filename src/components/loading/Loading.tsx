import styles from "./Loading.module.css";

const Loading = () => {
	return (
		<div className={styles.loadingWrapper}>
			<div className={styles.loadingIcon}></div>
		</div>
	);
};

export default Loading;
