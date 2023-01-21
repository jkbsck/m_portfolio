import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import styles from "./ScrollTopButton.module.css";

const Button = () => {
	const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 500) {
				setShowScrollButton(true);
			} else {
				setShowScrollButton(false);
			}
		});
	}, []);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			{showScrollButton && (
				<div className={styles.buttonWrapper} onClick={scrollTop}>
					<SlArrowUp />
					<div className={styles.gap}></div>
				</div>
			)}
		</>
	);
};

export default Button;
