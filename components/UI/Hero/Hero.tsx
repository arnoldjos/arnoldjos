import React from "react";

import css from "./Hero.scss";
import Button from "../Button/Button";

const Hero = () => {
	return (
		<header className={css.Hero}>
			<div className={css.Hero__text_box}>
				<img
					src="/images/me.jpg"
					alt="Arnold Joseph Fudolig"
					className={css.Hero__headshot}
				/>
				<h1 className={css.Hero__heading}>ARNOLD JOSEPH A. FUDOLIG</h1>
				<h3 className={css.Hero__sub}>arnold.fudolig@gmail.com</h3>
			</div>
		</header>
	);
};

export default Hero;
