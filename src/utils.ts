// Return style for a container with an image as a background
const getImageStyle = (image: string | undefined) => {
	if (!image) {
		return;
	}

	const styleWithImage = {
		backgroundImage: `url(${image})`,
	};

	return styleWithImage;
};

export { getImageStyle };
