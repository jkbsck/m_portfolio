import styles from "./About.module.css";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";

const About = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.aboutWrapper}>
				<div className={styles.title}>
					<h2>Margaretka Dobosova</h2>
				</div>
				<div className={styles.description}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
						cumque harum doloremque ut corporis omnis culpa voluptatibus sit,
						cupiditate nulla maiores numquam sed, et eos distinctio, eius iure.
						Voluptates, aut.
					</p>
				</div>
			</div>
			<div className={styles.contactWrapper}>
				<div className={styles.email}>
					<span>margaretadobosova@gmail.com</span>
				</div>
				<div className={styles.social}>
					<span className={styles.socialItem}>
						<SlSocialInstagram />
					</span>

					<span className={styles.socialItem}>
						<SlSocialFacebook />
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
