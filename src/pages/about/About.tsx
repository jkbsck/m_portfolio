import styles from "./About.module.css";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import Button from "../../components/ui/button/Button";
import { IAbout } from "../../interfaces";

interface AboutProps {
	about: IAbout;
}

const About: React.FC<AboutProps> = ({ about }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.aboutWrapper}>
				<div className={styles.imageWrapper}>
					<img src={about.image} alt={about.title} className={styles.image} />
				</div>
				<div className={styles.title}>
					<h2>{about.title}</h2>
				</div>
				<div className={styles.description}>
					<p>{about.description}</p>
				</div>
			</div>
			<div className={styles.contactWrapper}>
				<div className={styles.email}>
					<span>{about.email}</span>
				</div>
				<div className={styles.social}>
					<span className={styles.socialItem}>
						<a href={`${about.instagram}`} target="_blank" rel="noreferrer">
							<SlSocialInstagram />
						</a>
					</span>

					<span className={styles.socialItem}>
						<a href={`${about.facebook}`} target="_blank" rel="noreferrer">
							<SlSocialFacebook />
						</a>
					</span>
				</div>
			</div>
			<Button />
		</div>
	);
};

export default About;
