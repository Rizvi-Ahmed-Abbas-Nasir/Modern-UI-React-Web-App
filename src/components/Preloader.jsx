import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useContextProvider } from '../utils/GlobleContextProvider';
import LogoAni from '../assets/video/clever_studio_logo_anim.mp4';

const Container = styled.div`
	background-color: #000;
	width: 100vw;
	height: 100dvh;
	position: fixed;
	z-index: 9999999;
	color: #fff;

	video {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10rem;
	}

	.preloader-info {
		position: absolute;
		bottom: 5%;
		left: 50%;
		transform: translateX(-50%);
		font-size: 0.9rem;
		font-weight: 300;
	}
`;

const Preloader = () => {
	const { setPreloader } = useContextProvider();
	const containerRef = useRef(null);
	const vidRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			vidRef.current.play();

			gsap.to(containerRef.current, {
				yPercent: -100,
				duration: 0.5,
				delay: 2,
				ease: 'power2.inOut',
				onUpdate: function () {
					var progress = this.progress();
					if (progress >= 0.5) {
						setPreloader(false);
					}
				},
			});
		}, 2000);
	}, []);

	return (
		<Container ref={containerRef}>
			<video
				ref={vidRef}
				src={LogoAni}
				muted
				playsInline
			></video>
		</Container>
	);
};

export default Preloader;
