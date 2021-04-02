import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import Carousel1 from '../assets/img/samplePhotos/Samples_Photography1.JPEG';
import Carousel2 from '../assets/img/samplePhotos/Samples_Photography2.jpg';
import Carousel3 from '../assets/img/samplePhotos/Samples_Photography3.JPEG';
import Carousel4 from '../assets/img/samplePhotos/Samples_Photography4.JPEG';
import Carousel5 from '../assets/img/samplePhotos/Samples_Photography5.JPEG';

const items = [
	{
		src: `${Carousel1}`,
		altText: 'Slide 1'
	},
	{
		src: `${Carousel2}`,
		altText: 'Slide 2'
	},
	{
		src: `${Carousel3}`,
		altText: 'Slide 3'
	},
	{
		src: `${Carousel4}`,
		altText: 'Slide 4'
	},
	{
		src: `${Carousel5}`,
		altText: 'Slide 5'
	}
];

const PhotoCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const slides = items.map((item) => (
		<CarouselItem
			onExiting={() => setAnimating(true)}
			onExited={() => setAnimating(false)}
			key={item.src}
		>
			<img src={item.src} alt={item.altText} className="d-block w-100" />
		</CarouselItem>
	));

	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
};

export default PhotoCarousel;
