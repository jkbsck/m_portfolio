// Return style for a container with an image as a background
const getImageStyle = (image: string | undefined) => {
	if (!image) {
		return;
	}

	const styleWithImage = {
		backgroundImage: `url(${image})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		aspectRatio: "1",
	};

	return styleWithImage;
};

// CAROUSEL LOGIC
const changeCarousel = (e: React.MouseEvent) => {
	// Get parent wrapper of all carousel elements
	const wrapper: HTMLElement | null = (e.currentTarget as HTMLElement)
		.parentElement;
	if (!wrapper) {
		console.error(`Couldn't find parent carousel parent HTMLElement`);
		return;
	}

	const actualItem: HTMLElement = wrapper.querySelector(
		".item-active"
	) as HTMLElement; // Current active carousel item
	const arrow = (e.currentTarget as HTMLElement).getAttribute("data-arrow"); // Arrow which has been clicked on
	const numberOfItems: number | undefined =
		wrapper.querySelectorAll(".item").length; // Count of all items in carousel

	const classNamePattern: RegExp = /item-\d/;
	let actualItemNumber: string = "";
	let nextItemNumber: string = "";

	// Get carousel item number from its class
	actualItem.classList.forEach((className: string) => {
		if (className.match(classNamePattern)) {
			actualItemNumber = className[className.length - 1];
		}
	});

	// Make changes to carousel elements' classes accordingly
	if (arrow === "right") {
		nextItemNumber = String(Number(actualItemNumber) + 1);
		const nextItemFirst = wrapper.querySelector(
			".item-" + nextItemNumber
		) as HTMLElement;

		actualItem.classList.remove("item-active");
		actualItem.classList.add("item-prev");
		nextItemFirst.classList.add("item-active");
		nextItemFirst.classList.remove("item-next");
		wrapper.querySelector(".arrow-left")?.classList.remove("hidden");

		// Set item on the right if exists
		if (numberOfItems && numberOfItems > Number(nextItemNumber)) {
			const nextItemSecond = wrapper.querySelector(
				".item-" + (Number(nextItemNumber) + 1)
			) as HTMLElement;
			nextItemSecond.classList.add("item-next");
			nextItemSecond.classList.remove("hidden");
		}
	} else if (arrow === "left") {
		nextItemNumber = String(Number(actualItemNumber) - 1);
		const nextItemFirst = wrapper.querySelector(
			".item-" + nextItemNumber
		) as HTMLElement;
		actualItem.classList.remove("item-active");
		actualItem.classList.add("item-next");
		nextItemFirst.classList.add("item-active");
		nextItemFirst.classList.remove("item-prev");
		wrapper.querySelector(".arrow-right")?.classList.remove("hidden");

		// Set item on the left if exists
		if (Number(nextItemNumber) > 1) {
			const nextItemSecond = wrapper.querySelector(
				".item-" + (Number(nextItemNumber) - 1)
			) as HTMLElement;
			nextItemSecond.classList.add("item-prev");
			nextItemSecond.classList.remove("hidden");
		}
	}

	// Checks if item is first / last item of carousel
	if (nextItemNumber === "1") {
		wrapper.querySelector(".arrow-left")?.classList.add("hidden");
	}

	if (numberOfItems === Number(nextItemNumber)) {
		wrapper.querySelector(".arrow-right")?.classList.add("hidden");
	}
};

export { changeCarousel, getImageStyle };
