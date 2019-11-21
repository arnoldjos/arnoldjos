import React from 'react';

import css from './Hero.scss';
import Button from '../Button/Button';

const Hero = () => {
	return (
		<header className={css.Hero}>
			<div className={css.Hero__text_box}>
				<img
					src="/images/me.jpg"
					alt="Arnold Joseph Fudolig"
					className={css.Hero__headshot}
				/>
				<h1 className="Hero__heading-primary">
					<span className="Hero__heading-primary--main">
						ARNOLD JOSEPH A. FUDOLIG
					</span>
				</h1>
				<Button text="Projects" />
			</div>
		</header>
	);
};

export default Hero;
