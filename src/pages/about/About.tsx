import styles from "./About.module.css";
import { SlSocialInstagram, SlSocialFacebook } from "react-icons/sl";
import HomeButton from "../../components/ui/home_button/HomeButton";
import { SlArrowLeft } from "react-icons/sl";
import { IAbout } from "../../interfaces";
import React from "react";

interface AboutProps {
	about: IAbout;
}

const About: React.FC<AboutProps> = ({ about }) => {
	const getWrapperBackground = (image: string): React.CSSProperties => {
		return { backgroundImage: `url(${image})` };
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.background}>
				<div
					className={styles.imageBG}
					// style={getWrapperBackground(about.imageBG)}
				>
					<picture>
						<source srcSet="./images/about/about_bg.avif" />
						<img src="./images/about/about_bg.jpg" alt="svsgvsefvs" />
					</picture>
				</div>
				<div
					className={styles.imageLeft}
					style={getWrapperBackground(about.imageLeft)}
				></div>
				<div
					className={styles.imageRight}
					style={getWrapperBackground(about.imageRight)}
				></div>
			</div>
			<div className={styles.contentWrapper}>
				<div className={styles.aboutWrapper}>
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
			</div>
			<HomeButton />
		</div>
	);
};

export default About;
