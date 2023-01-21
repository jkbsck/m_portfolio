import { SlArrowLeft } from "react-icons/sl";
import styles from "./HomeButton.module.css";
import { useNavigate } from "react-router-dom";

const Button = () => {
	const navigate = useNavigate();

	const navigateHome = () => {
		navigate("/");
	};

	return (
		<div className={styles.buttonWrapper} onClick={navigateHome}>
			<div className={styles.gap}></div>
			<SlArrowLeft />
		</div>
	);
};

export default Button;
